import InputLabel from "@/Components/InputLabel.jsx";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Requirements({ auth }) {
    return  (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section >
                            <header className="pb-3">
                                <h2 className="text-3xl font-medium text-gray-900">Functional Requirements</h2>

                                <p className="mt-1 text-lg text-gray-600">
                                    List of elonbird's functional requirements.
                                </p>
                            </header>
                        </section>
                    </div>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="py-2 ">
                            <InputLabel className="text-2xl" value="Authentication Component" />
                            <ol className="text-md py-2 text-gray-600">
                                <li>1. The system should be able to register the user with their name, username, email, and password</li>
                                <li>2. The system should be able to validate the details entered by the user when the user is loggin in or registering an account.</li>
                                <li>3. The system should be able to allow the user to log in using their username and password</li>
                                <li>4. The system should be able to allow the users to log out from their account.</li>
                                <li>5. The system should be able to allow the users delete their account.</li>
                                <li>6. The system should be able to allow the users to update their profile information such as their name, username, email and password.</li>
                                <li>7. The system should be able to display the user profile account information.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="py-2">
                            <InputLabel className="text-2xl" value="Birdie Component" />
                            <ol className="text-md py-2 text-gray-600">
                                <li>1. The system should be able to allow the users to post a birdie</li>
                                <li>2. The system should be able to display all the birdies posted.</li>
                                <li>3. The system should be able to allow the users to edit their own birdies only.</li>
                                <li>4. The system should be able to allow the users to delete their own birdies only.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
