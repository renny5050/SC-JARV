import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CFormSelect,
  CButton,
} from '@coreui/react'

const Estudiantes = () => {
  const [selectedStudent, setSelectedStudent] = useState({})
  const [personasHogar, setPersonasHogar] = useState('') // Cambia a string
  const [caracteristicasVivienda, setCaracteristicasVivienda] = useState('')
  const [tenenciaVivienda, setTenenciaVivienda] = useState('')

  const handleChange = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
  }

  // Nuevo handler para selects
  const handleSelectChange = (setter) => (e) => {
    setter(e.target.value)
  }

  const handleSave = () => {
    const datosFinales = {
      ...selectedStudent,
      personas_hogar: personasHogar,
      caracteristicas_vivienda: caracteristicasVivienda,
      tenencia_vivienda: tenenciaVivienda,
    }
    console.log('Datos guardados:', datosFinales)
  }
  return (
    <CCard>
      <CCardHeader>Formulario de Inscripción Año Escolar 2024-2025</CCardHeader>
      <CCardBody>
        <CForm>
          <h6 className="mt-3">1. Identificación del Estudiante</h6>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Nombres</CFormLabel><CFormInput name="nombre_estudiante" value={selectedStudent.nombre_estudiante || ''} onChange={handleChange} /></CCol>
            <CCol md={6}><CFormLabel>Apellidos</CFormLabel><CFormInput name="apellido_estudiante" value={selectedStudent.apellido_estudiante || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={4}><CFormLabel>Fecha de Nacimiento</CFormLabel><CFormInput type="date" name="fecha_nacimiento" value={selectedStudent.fecha_nacimiento || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Municipio</CFormLabel><CFormInput name="municipio_nacimiento" value={selectedStudent.municipio_nacimiento || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Estado</CFormLabel><CFormInput name="estado_nacimiento" value={selectedStudent.estado_nacimiento || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={3}><CFormLabel>Edad (años)</CFormLabel><CFormInput name="edad_anios" value={selectedStudent.edad_anios || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Edad (meses)</CFormLabel><CFormInput name="edad_meses" value={selectedStudent.edad_meses || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Sexo</CFormLabel><CFormSelect name="sexo" value={selectedStudent.sexo || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'M', value: 'M' }, { label: 'F', value: 'F' }]} /></CCol>
            <CCol md={3}><CFormLabel>Nacionalidad</CFormLabel><CFormSelect name="nacionalidad" value={selectedStudent.nacionalidad || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Cédula Escolar</CFormLabel><CFormInput name="cedula_escolar" value={selectedStudent.cedula_escolar || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Peso (Kg)</CFormLabel><CFormInput name="peso_kg" value={selectedStudent.peso_kg || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Peso (g)</CFormLabel><CFormInput name="peso_g" value={selectedStudent.peso_g || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={3}><CFormLabel>Talla (m)</CFormLabel><CFormInput name="talla_m" value={selectedStudent.talla_m || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Talla (cm)</CFormLabel><CFormInput name="talla_cm" value={selectedStudent.talla_cm || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Fecha de Inscripción</CFormLabel><CFormInput type="date" name="fecha_inscripcion" value={selectedStudent.fecha_inscripcion || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Viene Promovido de:</CFormLabel><CFormInput name="viene_promovido" value={selectedStudent.viene_promovido || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol md={12}><CFormLabel>Instituto</CFormLabel><CFormInput name="instituto" value={selectedStudent.instituto || ''} onChange={handleChange} /></CCol>
          </CRow>

          <h6 className="mt-4">2. Datos del Representante</h6>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Nombres</CFormLabel><CFormInput name="rep_nombres" value={selectedStudent.rep_nombres || ''} onChange={handleChange} /></CCol>
            <CCol md={6}><CFormLabel>Apellidos</CFormLabel><CFormInput name="rep_apellidos" value={selectedStudent.rep_apellidos || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={4}><CFormLabel>Parentesco</CFormLabel><CFormInput name="rep_parentesco" value={selectedStudent.rep_parentesco || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Cédula de Identidad</CFormLabel><CFormInput name="rep_cedula" value={selectedStudent.rep_cedula || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Edad</CFormLabel><CFormInput name="rep_edad" value={selectedStudent.rep_edad || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Teléfono</CFormLabel><CFormInput name="rep_telefono" value={selectedStudent.rep_telefono || ''} onChange={handleChange} /></CCol>
            <CCol md={6}><CFormLabel>Dirección de Habitación</CFormLabel><CFormInput name="rep_direccion" value={selectedStudent.rep_direccion || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-4">
            <CCol md={12}><CFormLabel>Correo Electrónico</CFormLabel><CFormInput type="email" name="rep_correo" value={selectedStudent.rep_correo || ''} onChange={handleChange} /></CCol>
          </CRow>

          <h6 className="mt-4">3. Datos de la Madre</h6>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Nombre y Apellido</CFormLabel><CFormInput name="madre_nombre_apellido" value={selectedStudent.madre_nombre_apellido || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Cédula de Identidad</CFormLabel><CFormInput name="madre_cedula" value={selectedStudent.madre_cedula || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Nacionalidad</CFormLabel><CFormSelect name="madre_nacionalidad" value={selectedStudent.madre_nacionalidad || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={3}><CFormLabel>Edad (años)</CFormLabel><CFormInput name="madre_edad_anios" value={selectedStudent.madre_edad_anios || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Edad (meses)</CFormLabel><CFormInput name="madre_edad_meses" value={selectedStudent.madre_edad_meses || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Estado Civil</CFormLabel><CFormSelect name="madre_estado_civil" value={selectedStudent.madre_estado_civil || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'S', value: 'S' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]} /></CCol>
            <CCol md={3}><CFormLabel>Ocupación</CFormLabel><CFormInput name="madre_ocupacion" value={selectedStudent.madre_ocupacion || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Dirección de Habitación</CFormLabel><CFormInput name="madre_direccion" value={selectedStudent.madre_direccion || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Correo</CFormLabel><CFormInput type="email" name="madre_correo" value={selectedStudent.madre_correo || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Teléfono</CFormLabel><CFormInput name="madre_telefono" value={selectedStudent.madre_telefono || ''} onChange={handleChange} /></CCol>
          </CRow>

          <h6 className="mt-4">4. Datos de el Padre</h6>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Nombre y Apellido</CFormLabel><CFormInput name="madre_nombre_apellido" value={selectedStudent.madre_nombre_apellido || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Cédula de Identidad</CFormLabel><CFormInput name="madre_cedula" value={selectedStudent.madre_cedula || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Nacionalidad</CFormLabel><CFormSelect name="madre_nacionalidad" value={selectedStudent.madre_nacionalidad || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={3}><CFormLabel>Edad (años)</CFormLabel><CFormInput name="madre_edad_anios" value={selectedStudent.madre_edad_anios || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Edad (meses)</CFormLabel><CFormInput name="madre_edad_meses" value={selectedStudent.madre_edad_meses || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Estado Civil</CFormLabel><CFormSelect name="madre_estado_civil" value={selectedStudent.madre_estado_civil || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'S', value: 'S' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]} /></CCol>
            <CCol md={3}><CFormLabel>Ocupación</CFormLabel><CFormInput name="madre_ocupacion" value={selectedStudent.madre_ocupacion || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Dirección de Habitación</CFormLabel><CFormInput name="madre_direccion" value={selectedStudent.madre_direccion || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Correo</CFormLabel><CFormInput type="email" name="madre_correo" value={selectedStudent.madre_correo || ''} onChange={handleChange} /></CCol>
            <CCol md={3}><CFormLabel>Teléfono</CFormLabel><CFormInput name="madre_telefono" value={selectedStudent.madre_telefono || ''} onChange={handleChange} /></CCol>
          </CRow>

             <h6 className="mt-4">5. Persona a Contactar en Caso de Emergencia</h6>
          <CRow className="mb-3">
            <CCol md={6}><CFormLabel>Nombre</CFormLabel><CFormInput name="emergencia_nombre" value={selectedStudent["emergencia_nombre"] || ''} onChange={handleChange} /></CCol>
            <CCol md={6}><CFormLabel>Apellido</CFormLabel><CFormInput name="emergencia_apellido" value={selectedStudent["emergencia_apellido"] || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={4}><CFormLabel>Cédula de Identidad</CFormLabel><CFormInput name="emergencia_cedula" value={selectedStudent["emergencia_cedula"] || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Nacionalidad</CFormLabel><CFormSelect name="emergencia_nacionalidad" value={selectedStudent["emergencia_nacionalidad"] || ''} onChange={handleChange} options={[{ label: 'Seleccione', value: '' }, { label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} /></CCol>
            <CCol md={4}><CFormLabel>Edad</CFormLabel><CFormInput name="emergencia_edad" value={selectedStudent["emergencia_edad"] || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol md={4}><CFormLabel>Parentesco</CFormLabel><CFormInput name="emergencia_parentesco" value={selectedStudent["emergencia_parentesco"] || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Ocupación</CFormLabel><CFormInput name="emergencia_ocupacion" value={selectedStudent["emergencia_ocupacion"] || ''} onChange={handleChange} /></CCol>
            <CCol md={4}><CFormLabel>Teléfono</CFormLabel><CFormInput name="emergencia_telefono" value={selectedStudent["emergencia_telefono"] || ''} onChange={handleChange} /></CCol>
          </CRow>
          <CRow className="mb-4">
          <CCol md={12}>
            <CFormLabel>Dirección</CFormLabel>
            <CFormInput name="emergencia_direccion" value={selectedStudent["emergencia_direccion"] || ''} onChange={handleChange} />
          </CCol>
        </CRow>

         <h6 className="mt-4">6. Ambiente socio-familiar</h6>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormLabel>Personas que viven en el hogar</CFormLabel>
          <CFormSelect
            name="personas_hogar"
            value={personasHogar}
            onChange={handleSelectChange(setPersonasHogar)}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'Niños', value: 'ninos' },
              { label: 'Adultos', value: 'adultos' },
              { label: 'Ambos', value: 'ambos' },
            ]}
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Características de la vivienda</CFormLabel>
          <CFormSelect
            name="caracteristicas_vivienda"
            value={caracteristicasVivienda}
            onChange={handleSelectChange(setCaracteristicasVivienda)}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'Rancho', value: 'rancho' },
              { label: 'Casa', value: 'casa' },
              { label: 'Apto', value: 'apto' },
              { label: 'Quinta', value: 'quinta' },
              { label: 'Otro', value: 'otro' },
            ]}
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Tenencia de la vivienda</CFormLabel>
          <CFormSelect
            name="tenencia_vivienda"
            value={tenenciaVivienda}
            onChange={handleSelectChange(setTenenciaVivienda)}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'Propia', value: 'propia' },
              { label: 'Pagada', value: 'pagada' },
              { label: 'Alquilada', value: 'alquilada' },
              { label: 'Otro', value: 'otro' },
            ]}
          />
        </CCol>
      </CRow>

        <h6 className="mt-4">7. Antecedentes prenatales</h6>
      <CRow className="mb-3">
        <CCol md={6}>
          <CFormLabel>Enfermedades durante el embarazo</CFormLabel>
          <CFormInput
            name="enfermedades_embarazo"
            value={selectedStudent.enfermedades_embarazo || ''}
            onChange={handleChange}
            placeholder="Describa si hubo enfermedades durante el embarazo"
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel>Condiciones en el que se desarrolló el parto</CFormLabel>
          <CFormInput
            name="condiciones_parto"
            value={selectedStudent.condiciones_parto || ''}
            onChange={handleChange}
            placeholder="Condiciones del parto"
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormLabel>Edad de la madre para el momento del parto</CFormLabel>
          <CFormInput
            name="edad_madre_parto"
            value={selectedStudent.edad_madre_parto || ''}
            onChange={handleChange}
            placeholder="Edad de la madre"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Peso del niño(a) al nacer (kg)</CFormLabel>
          <CFormInput
            name="peso_nino_nacer"
            value={selectedStudent.peso_nino_nacer || ''}
            onChange={handleChange}
            placeholder="Peso en kilogramos"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Talla del niño(a) al nacer (cm)</CFormLabel>
          <CFormInput
            name="talla_nino_nacer"
            value={selectedStudent.talla_nino_nacer || ''}
            onChange={handleChange}
            placeholder="Talla en centímetros"
          />
        </CCol>
      </CRow>

      <h6 className="mt-4">8. Problemas que presentó al nacer</h6>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormLabel>Edad en la que empezó a hablar</CFormLabel>
          <CFormInput
            name="edad_hablar"
            value={selectedStudent.edad_hablar || ''}
            onChange={handleChange}
            placeholder="Edad en años"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Edad en la que empezó a caminar</CFormLabel>
          <CFormInput
            name="edad_caminar"
            value={selectedStudent.edad_caminar || ''}
            onChange={handleChange}
            placeholder="Edad en años"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Mano que utiliza</CFormLabel>
          <CFormSelect
            name="mano_utiliza"
            value={selectedStudent.mano_utiliza || ''}
            onChange={handleChange}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'Derecha', value: 'derecha' },
              { label: 'Izquierda', value: 'izquierda' },
            ]}
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormLabel>Salud</CFormLabel>
          <CFormInput
            name="salud"
            value={selectedStudent.salud || ''}
            onChange={handleChange}
            placeholder="Describa el estado de salud"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Enfermedades padecidas</CFormLabel>
          <CFormInput
            name="enfermedades_padecidas"
            value={selectedStudent.enfermedades_padecidas || ''}
            onChange={handleChange}
            placeholder="Indique enfermedades"
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel>Tipo de Sangre</CFormLabel>
          <CFormSelect
            name="tipo_sangre"
            value={selectedStudent.tipo_sangre || ''}
            onChange={handleChange}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'A+', value: 'A+' },
              { label: 'A-', value: 'A-' },
              { label: 'B+', value: 'B+' },
              { label: 'B-', value: 'B-' },
              { label: 'AB+', value: 'AB+' },
              { label: 'AB-', value: 'AB-' },
              { label: 'O+', value: 'O+' },
              { label: 'O-', value: 'O-' },
            ]}
          />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormLabel>Grupo sanguíneo</CFormLabel>
          <CFormSelect
            name="grupo_sanguineo"
            value={selectedStudent.grupo_sanguineo || ''}
            onChange={handleChange}
            options={[
              { label: 'Seleccione', value: '' },
              { label: 'A', value: 'A' },
              { label: 'B', value: 'B' },
              { label: 'AB', value: 'AB' },
              { label: 'O', value: 'O' },
            ]}
          />
        </CCol>
      </CRow>

          <CButton color="primary" onClick={handleSave}>Guardar</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default Estudiantes;

