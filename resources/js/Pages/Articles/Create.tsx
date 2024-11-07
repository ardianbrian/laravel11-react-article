import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const Create: React.FC = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        content: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post("/articles", {
            data: { title: data.title, content: data.content },
            onSuccess: () => {
                reset(); // Optionally reset form after success
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create New Article
                </h2>
            }
        >
            <Head title="Create Article" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />
                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="content"
                                        value="Content"
                                    />
                                    <textarea
                                        id="content"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        rows={5}
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.content}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton
                                        className="ms-4"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Saving..."
                                            : "Create Article"}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
