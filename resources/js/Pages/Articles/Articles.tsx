import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

interface Article {
    id: number;
    title: string;
    content: string;
    user: {
        name: string;
    };
}

interface ArticlePagesProps {
    articles: Article[];
}

const Articles: React.FC<ArticlePagesProps> = ({ articles }) => {
    if (!articles || articles.length === 0) {
        return (
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Articles
                    </h2>
                }
            >
                <Head title="Articles" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h3 className="text-lg font-bold">
                                    No Articles Available
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Articles
                </h2>
            }
        >
            <Head title="Articles" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="text-right">
                                <a
                                    href="/articles/create"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                                >
                                    Create New Article
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                                {articles.map((article) => (
                                    <div
                                        key={article.id}
                                        className="bg-white border rounded-lg shadow-lg p-4 flex flex-col"
                                    >
                                        <h4 className="text-xl font-semibold mb-2">
                                            {article.title}
                                        </h4>
                                        <p className="text-gray-700 mb-2">
                                            {article.content}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-auto">
                                            By {article.user.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Articles;
