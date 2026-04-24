"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { ArrowIconTwo } from "@/svg";

/* ------------------ data ------------------ */

const formFields = [
    {
        id: 1,
        col: "col-lg-6",
        label: "Full Name*",
        name: "name",
        type: "text",
        placeholder: "Daniel Scoot",
        rules: {
            required: "Full name is required",
        },
    },
    {
        id: 2,
        col: "col-lg-6",
        label: "Email Address*",
        name: "email",
        type: "email",
        placeholder: "Your Email",
        rules: {
            required: "Email is required",
            pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
            },
        },
    },
    {
        id: 3,
        col: "col-lg-6",
        label: "Company",
        name: "subject",
        type: "text",
        placeholder: "Ex. Microsoft",
    },
    {
        id: 4,
        col: "col-lg-6",
        label: "Phone Number*",
        name: "number",
        type: "text",
        placeholder: "+92 854 453 ***",
        rules: {
            required: "Phone number is required",
            minLength: {
                value: 7,
                message: "Phone number is too short",
            },
        },
    },
    {
        id: 5,
        col: "col-lg-12",
        label: "Choose Needed Service",
        name: "service",
        type: "text",
        placeholder: "Branding Design",
    },
];

/* ------------------ TypeScript Form Values ------------------ */
interface FormValues {
    name: string;
    email: string;
    subject?: string;
    number: string;
    service?: string;
    message: string;
}

/* ------------------ component ------------------ */

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        toast.success(`Thank you, ${data.name}! Your message has been sent successfully.`);
        reset();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {/* Inputs */}
                {formFields.map((field) => (
                    <div key={field.id} className={field.col}>
                        <div className="tp-contact-us-form-input mb-30">
                            <label>{field.label}</label>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                {...register(field.name as keyof FormValues, field.rules)}
                            />
                            {errors[field.name as keyof FormValues] && (
                                <p className="error-text">
                                    {
                                        errors[field.name as keyof FormValues]
                                            ?.message
                                    }
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Textarea */}
                <div className="col-lg-12">
                    <div className="tp-contact-us-form-input mb-30">
                        <label>Project Details</label>
                        <textarea
                            placeholder="Write to brief about project"
                            {...register("message", {
                                required: "Project details are required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                        />
                        {errors.message && (
                            <p className="error-text">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <div className="tp-contact-us-form-btn">
                        <button type="submit" className="tp-btn-green tp-btn-anim">
                            <span className="tp-btn-text">Submit Now</span>
                            <span>
                                <ArrowIconTwo width="11" height="12" />
                            </span>
                        </button>
                        <p className="ajax-response mt-5"></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
