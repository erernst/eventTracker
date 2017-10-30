package data;


import java.util.List;

import entities.Gas;

public interface GasDAO {

	public List<Gas> index();
	public Gas show(int id);
	public Gas create(String quizJSON);
	public Gas update(int id, String quizJSON);
	public boolean destroy(int id);
}
