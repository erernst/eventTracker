package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Gas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	private int amount;
	
	
	private int sMileage;
	
	
	private int eMileage;
	
	
	private String date;

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getsMileage() {
		return sMileage;
	}

	public void setsMileage(int sMileage) {
		this.sMileage = sMileage;
	}

	public int geteMileage() {
		return eMileage;
	}

	public void seteMileage(int eMileage) {
		this.eMileage = eMileage;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Gas [id=" + id + ", amount=" + amount + ", sMileage=" + sMileage + ", eMileage=" + eMileage + ", date="
				+ date + "]";
	}
	
	
}
