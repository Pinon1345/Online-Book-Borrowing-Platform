"use client";

import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaUserEdit } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { authClient } from '@/lib/auth-client';



const UpdateUserModal = () => {


    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value

        await authClient.updateUser({
            name,
            image
        })

    }


    return (
        <Modal>
            <Button variant="secondary" className="rounded-full text-lg font-bold"><FaUserEdit></FaUserEdit> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className='text-2xl font-bold text-blue-600'>Update User</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField className="w-full" name="name" type="text" variant="secondary">
                                        <Label className='text-lg font-semibold'>Name</Label>

                                        <Input
                                            placeholder="Enter your name" />
                                    </TextField>

                                    <TextField className="w-full mb-4" name="image" type="url" variant="secondary">
                                        <Label className='text-lg font-semibold'>Image_URL</Label>
                                        <Input
                                            placeholder="Enter your image_url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type='submit' slot="close">Save</Button>
                                    </Modal.Footer>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateUserModal;