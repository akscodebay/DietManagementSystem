package com.capstone.model;

public class Response {
	
	String response;

	public Response() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Response(String response) {
		super();
		this.response = response;
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	@Override
	public String toString() {
		return "Response [response=" + response + "]";
	}

}
