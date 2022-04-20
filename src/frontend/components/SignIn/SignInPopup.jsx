import React from 'react';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@mui/material';
import SignIn from './SignIn';

export default function SignInPopUp({
    openSignIn,
    setSignIn,
    user,
    setNewUser,
}) {
    const handleClose = () => {
        setSignIn(false);
    };

    return (
        <Dialog open={openSignIn} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <SignIn
                    user={user}
                    setNewUser={setNewUser}
                    setSignIn={setSignIn}
                />
            </DialogContent>
        </Dialog>
    );
}
