import React from 'react';
import { Select } from 'semantic-ui-react';

/*

- Tipo de servicio:
  Levantamiento básico
  Levantamiento catastral
  Levantamiento altimétrico/planimétrico
  Fotogrametría con drones
  Monitoreo geotécnico

- Area del terreno (input numerico):
  Superficie aproximada del terreno en metros cuadrados o hectáreas.

- Ubicación del terreno (Campo de texto o input de mapa)
  Dirección o coordenadas del terreno.


*/

const SelectUI = ({ data, placeholder }) => {
  return (
    <Select
      placeholder={placeholder}
      options={data}
    />
  )
}

export default SelectUI;
