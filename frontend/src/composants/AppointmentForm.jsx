
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    service: '',
    date: '',
    time: '',
    reason: ''
  });
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    
    try {
      const response = await axios.post("http://localhost:5000/appointment/appointments", formData);
      alert(response.data.message);
      
      setFormData({
        patientName: '',
        doctorName: '',
        service: '',
        date: '',
        time: '',
        reason: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
      alert("Erreur lors de la création du rendez-vous");
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="mb-4">Nouveau Rendez-vous</h2>
      
      <Form.Group className="mb-3">
        <Form.Label>Nom du patient</Form.Label>
        <Form.Control
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nom du médecin</Form.Label>
        <Form.Control
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Service</Form.Label>
        <Form.Select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionner un service</option>
          <option value="consultation">Consultation générale</option>
          <option value="urgence">Urgence</option>
          <option value="pediatrie">Pédiatrie</option>
          <option value="dentaire">Dentaire</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Heure</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Motif du rendez-vous</Form.Label>
        <Form.Control
          as="textarea"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows={3}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Créer le rendez-vous
      </Button>
    </Form>
  );
};

export default AppointmentForm;