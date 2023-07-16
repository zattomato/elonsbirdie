import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import BirdieInput from "@/Components/BirdieInput.jsx";
import Birdie from "@/Components/Birdie.jsx";

export default function Dashboard({ auth, birdies }) {

    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('birdie.store'), { onSuccess: () => reset() });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Birdies" />

            <BirdieInput />

            <div className="pt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-6  shadow-sm rounded-lg divide-y">
                        {birdies.map(birdie =>

                            <Birdie key={birdie.id} birdie={birdie} />

                        )}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
