package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Gas;

@Repository
@Transactional
public class GasDAOImpl implements GasDAO {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Gas> index() {
		String query = "SELECT g FROM Gas g";
		return em.createQuery(query, Gas.class).getResultList();
	}

	@Override
	public Gas show(int id) {
		return em.find(Gas.class, id);
	}

	@Override
	public Gas create(String quizJSON) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			Gas mappedGas = mapper.readValue(quizJSON, Gas.class);
			em.persist(mappedGas);
			em.flush();
			return mappedGas;
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public Gas update(int id, String quizJSON) {
		ObjectMapper mapper = new ObjectMapper();
		Gas tempG = em.find(Gas.class, id);
		try {
		if (tempG != null) {
			Gas mappedGas = mapper.readValue(quizJSON, Gas.class);
			tempG.setAmount(mappedGas.getAmount());
			tempG.setsMileage(mappedGas.getsMileage());
			tempG.seteMileage(mappedGas.geteMileage());
			tempG.setDate(mappedGas.getDate());
		}
		em.close();
		return tempG;}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public boolean destroy(int id) {
		boolean complete = false;
		Gas g = em.find(Gas.class, id);
		em.remove(g);
		g = em.find(Gas.class, id);
		if (g == null) {
			complete = true;
		}
		return complete;
	}

}
