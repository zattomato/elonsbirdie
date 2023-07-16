
import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {BiLike} from "react-icons/bi";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";


dayjs.extend(relativeTime);

export default function Birdie({ birdie }) {

    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: birdie.message,
        like_count: birdie.like_count,
    });



    const submit = (e) => {
        e.preventDefault();
        patch(route('birdie.update', birdie.id), { onSuccess: () => setEditing(false) });
    };



    return(
        <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
            <div className="p-6 flex space-x-2">
                <div style={{width:48}}>
                    <ApplicationLogo />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-gray-800">{birdie.user.username}</span>
                            <small className="ml-2 text-sm text-gray-600">{dayjs(birdie.created_at).fromNow()}</small>
                            { birdie.created_at !== birdie.updated_at && <small className="text-sm text-gray-600"> &middot; edited</small>}
                        </div>
                        {birdie.user.id === auth.user.id &&
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                        Edit
                                    </button>
                                    <Dropdown.Link as="button" href={route('birdie.destroy', birdie.id)} method="delete">
                                        Delete
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        }
                    </div>
                    {editing
                        ? <form onSubmit={submit}>
                            <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
                            <InputError message={errors.message} className="mt-2" />
                            <div className="space-x-2">
                                <PrimaryButton className="mt-4">Save</PrimaryButton>
                                <button className="mt-4" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancel</button>
                            </div>
                        </form>
                        :
                        <div>
                            <p className="mt-4 text-lg text-gray-900">{birdie.message}</p>
                            <div className="flex flex-row pt-2">
                                <div className="pr-1">
                                    <div className="h-10 inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase">
                                        <p>{birdie.like_count}</p>
                                    </div>
                                </div>
                                <div className="pr-1" onClick={()=>alert("Like")}>
                                    <SecondaryButton className="h-10" >
                                        < BiLike />
                                    </SecondaryButton>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
