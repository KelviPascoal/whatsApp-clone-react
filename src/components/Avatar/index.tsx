import { useEffect } from "react";
import { useState } from "react";
import { Container } from "./styles";

interface IAvatarProps {
    photo?: string;
}

export function Avatar({photo}: IAvatarProps) {
    const [profilkePhoto, setProfilePhoto] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    
    useEffect(() => {
        if (photo) {
            setProfilePhoto(photo)
        }
    }, [])
    
    return (
        <Container>
            <img src={profilkePhoto} alt="foto de avatar" />
        </Container>
    )
}