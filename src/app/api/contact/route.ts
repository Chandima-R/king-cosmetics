import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;

        const name = body.name?.trim();
        const email = body.email?.trim();
        const phone = body.phone?.trim();
        const subject = body.subject?.trim();
        const message = body.message?.trim();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields.",
                },
                { status: 400 },
            );
        }

        const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sriLankanPhoneRegex =
    /^(\+94|0)(70|71|72|74|75|76|77|78)\d{7}$/;

if (name.length < 3) {
    return NextResponse.json(
        {
            success: false,
            message: "Please enter a valid full name.",
        },
        { status: 400 },
    );
}

if (!emailRegex.test(email)) {
    return NextResponse.json(
        {
            success: false,
            message: "Please enter a valid email address.",
        },
        { status: 400 },
    );
}

if (
    phone &&
    !sriLankanPhoneRegex.test(
        phone.replace(/\s/g, ""),
    )
) {
    return NextResponse.json(
        {
            success: false,
            message:
                "Please enter a valid Sri Lankan phone number.",
        },
        { status: 400 },
    );
}

if (subject.length < 5) {
    return NextResponse.json(
        {
            success: false,
            message:
                "Subject must be at least 5 characters.",
        },
        { status: 400 },
    );
}

if (message.length < 15) {
    return NextResponse.json(
        {
            success: false,
            message:
                "Message must be at least 15 characters.",
        },
        { status: 400 },
    );
}

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                { status: 400 },
            );
        }

        if (
            !process.env.EMAIL_USER ||
            !process.env.EMAIL_PASS ||
            !process.env.CONTACT_EMAIL
        ) {
            console.error("Email environment variables are missing.");

            return NextResponse.json(
                {
                    success: false,
                    message: "Email service is not configured.",
                },
                { status: 500 },
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Green Blue Nature Website" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `Website Inquiry: ${subject}`,
            text: `
                New Contact Form Submission

                Name: ${name}
                Email: ${email}
                Phone: ${phone || "Not provided"}
                Subject: ${subject}

                Message:
                ${message}
            `,
            html: `
                <div
                    style="
                        max-width: 620px;
                        margin: 0 auto;
                        font-family: Arial, sans-serif;
                        color: #1f2937;
                    "
                >
                    <div
                        style="
                            background: #3f741c;
                            color: white;
                            padding: 24px;
                            border-radius: 16px 16px 0 0;
                        "
                    >
                        <p
                            style="
                                margin: 0 0 6px;
                                font-size: 12px;
                                text-transform: uppercase;
                                letter-spacing: 1.5px;
                            "
                        >
                            Green Blue Nature
                        </p>

                        <h2 style="margin: 0;">
                            New Contact Inquiry
                        </h2>
                    </div>

                    <div
                        style="
                            border: 1px solid #e5e7eb;
                            border-top: 0;
                            padding: 24px;
                            border-radius: 0 0 16px 16px;
                        "
                    >
                        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

                        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

                        <p>
                            <strong>Phone:</strong>
                            ${escapeHtml(phone || "Not provided")}
                        </p>

                        <p>
                            <strong>Subject:</strong>
                            ${escapeHtml(subject)}
                        </p>

                        <div
                            style="
                                margin-top: 20px;
                                padding: 18px;
                                background: #f3f7ef;
                                border-radius: 12px;
                            "
                        >
                            <p
                                style="
                                    margin: 0 0 8px;
                                    color: #3f741c;
                                    font-weight: 700;
                                "
                            >
                                Message
                            </p>

                            <p
                                style="
                                    margin: 0;
                                    line-height: 1.7;
                                    white-space: pre-line;
                                "
                            >
                                ${escapeHtml(message)}
                            </p>
                        </div>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully.",
        });
    } catch (error) {
        console.error("Contact email error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to send your message. Please try again.",
            },
            { status: 500 },
        );
    }
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}