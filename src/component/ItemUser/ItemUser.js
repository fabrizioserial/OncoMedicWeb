import React from 'react'
import './ItemUser.css'
import optionIcon from 'src/img/option_icon.png'
import {Menu,MenuItem,Button} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons'
import MouseOverPopover from '../mouseOverPopover/MouseOverPopover'



export const ItemUser = (props) => {
    return (

        props.type=="seeAllUsers"?
            <tr className="item-user-fila">
                <th scope="row" className="item-user-user-image-table"><img className="item-user-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                <td>1122334455</td> 
                <td>Carmen Cardozo</td>
                <td><button className="item-user-options" onClick={props.handleClick}><img className="usertab_icon_image" src={optionIcon}/></button></td>
            </tr>: 

        props.type=="home"?
            <tr className="usertab-fila">
                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                <td>1122334455</td>
                <td>Carmen Cardozo</td>
                <td><Button className="item-user-options" onClick={props.handleClick}><img className="usertab_icon_image" src={optionIcon} /></Button></td>
            </tr>: 

        props.type=="estado"?
            <tr className="estado-usertab-fila">
                <td className="sintomas-fila-fecha">11/2/21</td>
                <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
                <td>Feliz</td>
                <td className="estado-fila-button"><Button className="item-user-options" onClick={props.handleClick}><img className="usertab_icon_image" src={optionIcon} /></Button></td>
            </tr>:

        props.type=="sintomas"?
            <tr className="sintomas-usertab-fila">
                <td className="sintomas-fila-fecha">22/1/22</td> 
                <td className="sintomas-fila-fecha">Fiebre</td>
                <td className="sintomas-fila-grado"><MouseOverPopover name={3} descrip="mas de 40 grados"/></td>
            </tr>:

        props.type=="regDia"?
            <tr className="item-user-fila-regdiario">
                <td> <FontAwesomeIcon icon={faLaughBeam} className="smile-icon" size="2x"/></td>
                <td>Estado de animo</td>
                <td></td>
                <td>1</td>
            </tr> : 
        props.type=="regDiario"?
            <tr className="estado-usertab-fila">
            <td className="sintomas-fila-fecha">11/2/21</td>
            <th scope="row" className="usertab-user-image-table"><img className="usertab-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRyv9Dkf8Wusb0uForhlXoz090E0Xgt_1OQ&usqp=CAU" /></th>
            <td>Feliz</td>
            <td></td>
            </tr>: ""
    )
}
  