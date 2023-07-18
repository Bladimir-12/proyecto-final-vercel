import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celSlices';
import '../App.css';

const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel)
    function handleAdd(celid) {
        const celebrity = celebrities.find(c => c.birthday === celid);
        if (celebrities_List.find(c => c.birthday === celid)) {
            dispatch(removeCel(celid));
        } else {
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }
    //Pendiente Botón en el return para agregar al redux, generar un handle para disparar el dispatch


    return (
        <div className="full-container">
            <div className="h1"> Lista de Celebridades</div>
            <div className="row">


                <div className="col"> {celebrities.map(c => {
                    return (
                        <div className="card-body ">
                            <h4 className="card-title">{c.name}</h4>
                            <h2 className="card-text text-secondary">Edad: {c.age} años</h2>
                            <div className="card-text text-primary">Profesión: {c.occupation} </div>
                            <button onClick={() => handleAdd(c.birthday)} className="btn btn-outline-secondary rounded-0">Agregar a Celebridades Favoritas</button>
                        </div>)
                }

                )}
                </div>


            </div>
        </div>)
}



export default Celebrities_List