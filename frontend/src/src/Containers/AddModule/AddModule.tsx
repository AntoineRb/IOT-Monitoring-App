import * as React from 'react';
import insertNewModule from '../../services/insertNewModule';

import './AddModule.scss';

interface IAddModuleProps {
}

const AddModule: React.FunctionComponent<IAddModuleProps> = (props) => {

  const formEvent = ( e ) => {
    e.preventDefault();
    let type:string = e.target.type.value;
    let name:string = e.target.name.value;
    let unit:string = e.target.unit.value;
    const minValue:number = +e.target.minValue.value;
    const maxValue:number = +e.target.maxValue.value;
    if ( type.length > 1 && name.length > 1 && unit.length > 1) {
      try { // replace whitespace
        type = type.replace(/\s/g, '-');
        name = name.replace(/\s/g, '-');
        unit = unit.replace(/\s/g, '-');
      }
      catch(err) {
        throw err;
      }
    }
    if ( minValue > 0 && maxValue > 0 ) {
      const module = {
        type,
        name
      }
      const detail = {
        value: 0,
        minValue,
        maxValue,
        unit,
        moduleId: 0
      }
      insertNewModule({module, detail})
      .then( () => alert('Module Ajouté à la liste'));
    } else {
      alert('Une erreur est survenue veuillez remplit correctement le formulaire ci-dessous')
    }
    e.target.type.value = "";
    e.target.name.value = "";
    e.target.unit.value = "";
    e.target.minValue.value = "";
    e.target.maxValue.value = "";
  }

  return (
      <main>
        <section>
            <h1>Ajouter Un Nouveau Module IOT</h1>
            <form 
            onSubmit={ e => formEvent(e)}
            className='form-add-module'>
              <div className='input-container'>
                <label htmlFor="type">Type de Module</label>
                <input type="text" id="type" name="type"/>
              </div>
              <div className='input-container'>
                <label htmlFor="name">Nom du Module</label>
                <input type="text" id="name" name="name"/>
              </div>
              <div className='input-container'>
                <label htmlFor="minValue">Valeur minimale attendue</label>
                <input type="number" id="minValue" name="minValue"/>
              </div>
              <div className='input-container'>
                <label htmlFor="maxValue">Valeur maximale attendue</label>
                <input type="number" id="maxValue" name="maxValue"/>
              </div>
              <div className='input-container'>
                <label htmlFor="unit">Unité de Mesure</label>
                <input type="text" id="unit" name="unit"/>
              </div>
              <button type='submit'>Ajouter Un Nouveau Module</button>
            </form>
        </section>
      </main>
  );
};

export default AddModule;
