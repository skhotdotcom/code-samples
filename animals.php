class Animals_model extends CI_Model {

		function getAll() {
			$q = $this->db->get('animals');
			if($q->num_rows() > 0) {
				foreach ($q->result() as $row) {
					$data[] = $row;
				}
				return $data;
			}
		}
	
		function getFamilies() {
			$q = $this->db->get('family');
			if($q->num_rows() > 0) {
				foreach ($q->result() as $row) {
					$data[]= $row;
				}
				return $data;
			}
		}
		
		function getColors() {
			$q = $this->db->get('colors');
			if($q->num_rows() > 0) {
				foreach ($q->result() as $row) {
					$data[]= $row;
				}
				return $data;
			}
		}

		function getID() {
			$id = $this->uri->segment(3);
			$this->db->where('animalID', $id);
			$q = $this->db->get('animals');
			if($q->num_rows() > 0) {
				foreach ($q->result() as $row) {
					$data[] = $row;
				}
				return $data;
			}
		}
		
		function update() {
			$id = $this->uri->segment(3);
			$data = array(
				'Name' => $this->form_validation->set_value('Name'),
				'Family' => $this->form_validation->set_value('Family'),
				'Color' => $this->form_validation->set_value('Color'),
			
			);
			$this->db->where('animalID', $id);
			$this->db->update('animals', $data);
		}
	}
