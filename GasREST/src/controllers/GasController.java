package controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.GasDAO;
import entities.Gas;

@RestController
public class GasController {
	 @Autowired
	 private GasDAO gasDao;

	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}

	@RequestMapping(path = "gasses", method = RequestMethod.GET)
	public List<Gas> index(HttpServletResponse res) {
		return gasDao.index();
	}

	@RequestMapping(path = "gasses/{id}", method = RequestMethod.GET)
	public Gas show(@PathVariable int id, HttpServletResponse res) {
		return gasDao.show(id);
	}

	@RequestMapping(path = "gasses", method = RequestMethod.POST)
	public Gas create(@RequestBody String quizJSON, HttpServletResponse res) {
		return gasDao.create(quizJSON);
	}

	@RequestMapping(path = "gasses/{id}", method = RequestMethod.PUT)
	public Gas update(@PathVariable int id, @RequestBody String quizJSON, HttpServletResponse res) {
		return gasDao.update(id, quizJSON);
	}

	@RequestMapping(path = "gasses/{id}", method = RequestMethod.DELETE)
	public boolean destroy(@PathVariable int id, HttpServletResponse res) {
		return gasDao.destroy(id);
	}

}
