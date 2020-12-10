package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Messages {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	String userId;
	String sender;
	String message;
	
	public Messages() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Messages(String userId, String sender, String message) {
		super();
		this.userId = userId;
		this.sender = sender;
		this.message = message;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Messages [id=" + id + ", userId=" + userId + ", sender=" + sender + ", message=" + message + "]";
	}

}
