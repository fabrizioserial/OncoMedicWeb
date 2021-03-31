import React from 'react'
import "../profile/CompleteProfile.css"
import {ButtonGoBack} from "../seeAllUsers/ButtonGoBack"
import { UsertabEstado } from '../usertabEstado/UsertabEstado'
import { UsertabSintomas } from '../usertabSintomas/UsertabSintomas'

export const CompleteProfile = () => {
    return (
        <div className="profile-cont-background">
            <ButtonGoBack text="VOLVER AL INICIO" color="purple"></ButtonGoBack>
            <div className="name-div-complete-profile">
                <img className="complete-profile-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" />
                <div className="div-text-complete-profile">
                    <p className="id-complete-profile">42673854</p>
                    <h3 className="name-complete-profile">Altamirano, Carmen</h3>
                    <p className="id-complete-profile">Tipo de cancer: </p>
                    <p className="id-complete-profile">Fuma: </p>
                    <p className="id-complete-profile">Diabetes: </p>
                </div>
            </div>
            <div className="two-squares-complete-profile">
                <UsertabEstado flexi={{Flex:1}}/>
                
                <UsertabSintomas flexi={{Flex:1}}/>
                
            </div>
        </div>
    )
}


