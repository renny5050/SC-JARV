import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilInfo } from '@coreui/icons'

const Secciones = () => {
  const [secciones, setSecciones] = useState([
    { codigo_secci: 'A01', nombre_secci: 'Primero A' },
    { codigo_secci: 'B02', nombre_secci: 'Segundo B' },
    { codigo_secci: 'C03', nombre_secci: 'Tercero C' }
  ])

  const [visible, setVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [selectedSeccion, setSelectedSeccion] = useState(null)

  const handleEdit = (seccion) => {
    setSelectedSeccion({ ...seccion })
    setEditMode(true)
    setVisible(true)
  }

  const handleView = (seccion) => {
    setSelectedSeccion({ ...seccion })
    setEditMode(false)
    setVisible(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedSeccion({ ...selectedSeccion, [name]: value })
  }

  const handleSave = () => {
    setSecciones(secciones.map((sec) => (sec.codigo_secci === selectedSeccion.codigo_secci ? selectedSeccion : sec)))
    setVisible(false)
  }

  return (
    <>
      <CCard>
        <CCardHeader>Lista de Secciones</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Código</CTableHeaderCell>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {secciones.map((seccion, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{seccion.codigo_secci}</CTableDataCell>
                  <CTableDataCell>{seccion.nombre_secci}</CTableDataCell>
                  <CTableDataCell>
                    <CButton size="sm" color="info" className="me-2" onClick={() => handleView(seccion)}>
                      <CIcon icon={cilInfo} />
                    </CButton>
                    <CButton size="sm" color="warning" onClick={() => handleEdit(seccion)}>
                      <CIcon icon={cilPencil} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{editMode ? 'Editar Sección' : 'Ver Sección'}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedSeccion && (
            <CForm>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormLabel>Código</CFormLabel>
                  <CFormInput
                    name="codigo_secci"
                    value={selectedSeccion.codigo_secci}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel>Nombre</CFormLabel>
                  <CFormInput
                    name="nombre_secci"
                    value={selectedSeccion.nombre_secci}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </CCol>
              </CRow>
            </CForm>
          )}
        </CModalBody>
        <CModalFooter>
          {editMode && <CButton color="primary" onClick={handleSave}>Guardar</CButton>}
          <CButton color="secondary" onClick={() => setVisible(false)}>Cerrar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Secciones