package com.capstone.model;

public class Email {
	
	String sendTo;
	String subject;
	String message;
	
	public Email(String sendTo, String subject, String message) {
		super();
		this.sendTo = sendTo;
		this.subject = subject;
		this.message = message;
	}

	public String getSendTo() {
		return sendTo;
	}

	public void setSendTo(String sendTo) {
		this.sendTo = sendTo;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Email [sendTo=" + sendTo + ", subject=" + subject + ", message=" + message + "]";
	}
	
}
