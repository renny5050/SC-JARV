import React, { useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardBody,
  CCardHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CFormSelect,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilInfo } from '@coreui/icons'

const Estudiantes = () => {
  const [students, setStudents] = useState([
    {
      nombre_estudiante: 'Luis',
      apellido_estudiante: 'Pérez',
      cedula_escolar: 'E123456',
      fecha_nacimiento: '2012-05-10',
      sexo: 'M',
      raza: 'Mestizo',
      peso: '35',
      talla: '140',
      nombre_representante: 'Ana Pérez',
      parentesco: 'Madre',
      cedula_representante: '12345678',
      nombre_madre: 'Ana Pérez',
      nacionalidad_madre: 'V',
      edad_madre: '35',
      estado_civil_madre: 'S',
      nombre_padre: 'Carlos Pérez',
      nacionalidad_padre: 'V',
      edad_padre: '40',
      estado_civil_padre: 'C'
    },
    {
      nombre_estudiante: 'María',
      apellido_estudiante: 'Gómez',
      cedula_escolar: 'E654321',
      fecha_nacimiento: '2011-08-22',
      sexo: 'F',
      raza: 'Blanca',
      peso: '30',
      talla: '135',
      nombre_representante: 'José Gómez',
      parentesco: 'Padre',
      cedula_representante: '87654321',
      nombre_madre: 'Clara Gómez',
      nacionalidad_madre: 'V',
      edad_madre: '38',
      estado_civil_madre: 'C',
      nombre_padre: 'José Gómez',
      nacionalidad_padre: 'V',
      edad_padre: '42',
      estado_civil_padre: 'C'
    }
  ])

  const [visible, setVisible] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [editMode, setEditMode] = useState(false)

  const handleChange = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
  }

  const handleEdit = (student) => {
    setSelectedStudent(student)
    setEditMode(true)
    setVisible(true)
  }

  const handleView = (student) => {
    setSelectedStudent(student)
    setEditMode(false)
    setVisible(true)
  }

  const handleSave = () => {
    setStudents(
      students.map((s) =>
        s === selectedStudent ? selectedStudent : s
      )
    )
    setVisible(false)
  }

  return (
    <>
      <CCard>
        <CCardHeader>Lista de Estudiantes</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Apellido</CTableHeaderCell>
                <CTableHeaderCell>Cédula Escolar</CTableHeaderCell>
                <CTableHeaderCell>Sexo</CTableHeaderCell>
                <CTableHeaderCell>Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {students.map((student, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{student.nombre_estudiante}</CTableDataCell>
                  <CTableDataCell>{student.apellido_estudiante}</CTableDataCell>
                  <CTableDataCell>{student.cedula_escolar}</CTableDataCell>
                  <CTableDataCell>{student.sexo}</CTableDataCell>
                  <CTableDataCell>
                    <CButton size="sm" color="info" className="me-2" onClick={() => handleView(student)}>
                      <CIcon icon={cilInfo} />
                    </CButton>
                    <CButton size="sm" color="warning" onClick={() => handleEdit(student)}>
                      <CIcon icon={cilPencil} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader>
          <CModalTitle>{editMode ? 'Editar Estudiante' : 'Ver Estudiante'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedStudent && (
            <CForm>
              <CRow className="mb-3">
                <CCol md={4}>
                  <CFormLabel>Nombre(s)</CFormLabel>
                  <CFormInput name="nombre_estudiante" value={selectedStudent.nombre_estudiante} onChange={handleChange} disabled={!editMode} />
                </CCol>
                <CCol md={4}>
                  <CFormLabel>Apellido(s)</CFormLabel>
                  <CFormInput name="apellido_estudiante" value={selectedStudent.apellido_estudiante} onChange={handleChange} disabled={!editMode} />
                </CCol>
                <CCol md={4}>
                  <CFormLabel>Cédula Escolar</CFormLabel>
                  <CFormInput name="cedula_escolar" value={selectedStudent.cedula_escolar} onChange={handleChange} disabled={!editMode} />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={4}>
                  <CFormLabel>Fecha de Nacimiento</CFormLabel>
                  <CFormInput type="date" name="fecha_nacimiento" value={selectedStudent.fecha_nacimiento} onChange={handleChange} disabled={!editMode} />
                </CCol>
                <CCol md={4}>
                  <CFormLabel>Sexo</CFormLabel>
                  <CFormSelect name="sexo" value={selectedStudent.sexo} onChange={handleChange} disabled={!editMode} options={[{ label: 'Seleccionar', value: '' }, { label: 'M', value: 'M' }, { label: 'F', value: 'F' }]} />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel>Nombre Representante</CFormLabel>
                  <CFormInput name="nombre_representante" value={selectedStudent.nombre_representante} onChange={handleChange} disabled={!editMode} />
                </CCol>
                <CCol md={3}>
                  <CFormLabel>Parentesco</CFormLabel>
                  <CFormInput name="parentesco" value={selectedStudent.parentesco} onChange={handleChange} disabled={!editMode} />
                </CCol>
                <CCol md={3}>
                  <CFormLabel>Cédula</CFormLabel>
                  <CFormInput name="cedula_representante" value={selectedStudent.cedula_representante} onChange={handleChange} disabled={!editMode} />
                </CCol>
              </CRow>
            </CForm>
          )}
        </CModalBody>
        <CModalFooter>
          {editMode && <CButton color="primary" onClick={handleSave}>Guardar Cambios</CButton>}
          <CButton color="secondary" onClick={() => setVisible(false)}>Cerrar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Estudiantes
g