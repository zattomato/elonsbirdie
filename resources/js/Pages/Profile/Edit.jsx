import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head, Link} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import elonsface from "../../../media/ElonsBirdieLogo.png";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section >
                            <header className="pb-3">
                                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Your account's profile information and email address.
                                </p>
                            </header>
                            <div className="py-2 ">
                                <InputLabel value="Name" />
                                <p className="text-2xl py-2">{auth.user.name}</p>
                            </div>
                            <div className="py-2">
                                <InputLabel value="Username" />
                                <p className="text-2xl py-2">{auth.user.username}</p>
                            </div>
                            <div className="py-2">
                                <InputLabel value="Email" />
                                <p className="text-2xl py-2">{auth.user.email}</p>
                            </div>
                        </section>
                    </div>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
