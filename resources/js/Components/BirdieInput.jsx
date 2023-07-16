import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react";
import Birdie from "@/Components/Birdie.jsx";

export default function BirdieInput() {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('birdie.store'), { onSuccess: () => reset() });
    };

    return (
        <div className="pt-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <form onSubmit={submit}>
                        <textarea
                            value={data.message}
                            placeholder="What's birdin'?"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={e => setData('message', e.target.value)}
                        ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Birdie</PrimaryButton>
                </form>
            </div>
        </div>
    )
}
