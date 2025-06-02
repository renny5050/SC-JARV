import React from 'react'
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CFormSelect,
  CFormTextarea,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
} from '@coreui/react'

const Inscrip = () => {
  return (
    <CCard>
      <CCardHeader>Planilla de Inscripción Año Escolar 2024-2025</CCardHeader>
      <CCardBody>
        <CForm>
          <h5>1. Identificación del Estudiante</h5>
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel>Nombre(s)</CFormLabel>
              <CFormInput type="text" name="nombre_estudiante" />
            </CCol>
            <CCol md={6}>
              <CFormLabel>Apellido(s)</CFormLabel>
              <CFormInput type="text" name="apellido_estudiante" />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol md={4}>
              <CFormLabel>Fecha de Nacimiento</CFormLabel>
              <CFormInput type="date" name="fecha_nacimiento" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Sexo</CFormLabel>
              <CFormSelect name="sexo" options={[{ label: 'M', value: 'M' }, { label: 'F', value: 'F' }]} />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Raza</CFormLabel>
              <CFormInput type="text" name="raza" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Peso (Kg)</CFormLabel>
              <CFormInput type="number" name="peso" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Talla (cm)</CFormLabel>
              <CFormInput type="number" name="talla" />
            </CCol>
          </CRow>

          <h5>2. Datos del Representante</h5>
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel>Nombre y Apellido</CFormLabel>
              <CFormInput type="text" name="nombre_representante" />
            </CCol>
            <CCol md={3}>
              <CFormLabel>Parentesco</CFormLabel>
              <CFormInput type="text" name="parentesco" />
            </CCol>
            <CCol md={3}>
              <CFormLabel>Cédula de Identidad</CFormLabel>
              <CFormInput type="text" name="cedula_representante" />
            </CCol>
          </CRow>

          <h5>3. Datos de la Madre</h5>
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel>Nombre y Apellido</CFormLabel>
              <CFormInput type="text" name="nombre_madre" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Nacionalidad</CFormLabel>
              <CFormSelect name="nacionalidad_madre" options={[{ label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Edad</CFormLabel>
              <CFormInput type="number" name="edad_madre" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Estado Civil</CFormLabel>
              <CFormSelect name="estado_civil_madre" options={[{ label: 'S', value: 'S' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]} />
            </CCol>
          </CRow>

          <h5>4. Datos del Padre</h5>
          <CRow className="mb-3">
            <CCol md={6}>
              <CFormLabel>Nombre y Apellido</CFormLabel>
              <CFormInput type="text" name="nombre_padre" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Nacionalidad</CFormLabel>
              <CFormSelect name="nacionalidad_padre" options={[{ label: 'V', value: 'V' }, { label: 'E', value: 'E' }]} />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Edad</CFormLabel>
              <CFormInput type="number" name="edad_padre" />
            </CCol>
            <CCol md={2}>
              <CFormLabel>Estado Civil</CFormLabel>
              <CFormSelect name="estado_civil_padre" options={[{ label: 'S', value: 'S' }, { label: 'C', value: 'C' }, { label: 'D', value: 'D' }]} />
            </CCol>
          </CRow>

          <CButton type="submit">Guardar</CButton>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default Inscrip
