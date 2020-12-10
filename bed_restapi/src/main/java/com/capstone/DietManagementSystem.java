package com.capstone;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import com.capstone.model.Admin;
import com.capstone.model.Batches;
import com.capstone.model.Challenger;
import com.capstone.model.DailyLogs;
import com.capstone.model.Divisions;
import com.capstone.model.Messages;
import com.capstone.model.MonthlyChart;
import com.capstone.model.Motivator;
import com.capstone.model.TemporaryUser;
import com.capstone.repository.BatchRepository;
import com.capstone.repository.ChallengerRepository;
import com.capstone.repository.DailyLogsRepository;
import com.capstone.repository.DivisionRepository;
import com.capstone.repository.MessagesRepository;
import com.capstone.repository.MonthlyChartRepository;
import com.capstone.repository.MotivatorRepository;
import com.capstone.repository.TempUserRepository;
import com.capstone.repository.adminRepository;

@SpringBootApplication
public class DietManagementSystem implements CommandLineRunner{
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	adminRepository adminrepository;
	
	@Autowired
	BatchRepository batchRepository;
	
	@Autowired
	DivisionRepository divisionRepository;
	
	@Autowired
	ChallengerRepository challengerRepository;

	@Autowired
	TempUserRepository tempUserRepository;
	
	@Autowired
	MotivatorRepository motivatorRepository;
	
	@Autowired
	DailyLogsRepository dailyLogsRepository;
	
	@Autowired
	MonthlyChartRepository monthlyChartRepository;
	
	@Autowired
	private MessagesRepository messagesRepository;
	
	
	public static void main(String[] args) {
		SpringApplication.run(DietManagementSystem.class, args);
	}
	
	@Transactional
	@Override
	public void run(String... args) throws Exception {
		logger.info(""+adminrepository.save(new Admin("aks", "password", "aks@aks.com", "aayush","aayush03")));
		
		logger.info(""+batchRepository.save(new Batches("BelowBMI25")));
		logger.info(""+batchRepository.save(new Batches("AboveBMI25")));
		
		logger.info(""+divisionRepository.save(new Divisions("Veg")));
		logger.info(""+divisionRepository.save(new Divisions("Non-Veg")));
		logger.info(""+divisionRepository.save(new Divisions("Vegan")));
		
		logger.info(""+challengerRepository.save(new Challenger("aks1", "aks", "male", 8948978328L, "aks@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179.5f, 64f, 22f, "access weight", "none", "none", "vegan", "", "aayush03", "aayush01", "password")));
		logger.info(""+challengerRepository.save(new Challenger("aks2", "aks", "male", 8948978327L, "aks1@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weightaa", "none", "none", "veg", "", "aayush03", "aayush02",  "password")));
		logger.info(""+challengerRepository.save(new Challenger("aksfe", "aks", "female", 8948958327L, "aksfe@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weightaa", "none", "none", "non-veg", "yes", "aayush03", "aayushfe",  "password")));

		logger.info(""+tempUserRepository.save(new TemporaryUser("aks3", "aks", "male", 8948970327L, "aks2@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush03",  "password")));
		logger.info(""+tempUserRepository.save(new TemporaryUser("aks4", "aks", "male", 8948971327L, "aks3@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush04",  "password")));
         
		logger.info(""+motivatorRepository.save(new Motivator("aks5", "aks", "male", 1948971327L, "aks4@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush05",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks6", "aks", "male", 2948971327L, "aks5@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush06",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks7", "aks", "male", 3948971327L, "aks6@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush07",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks8", "aks", "male", 4948971327L, "aks7@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush08",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks9", "aks", "male", 5948971327L, "aks8@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush09",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks10", "aks", "male", 6948971327L, "aks9@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush10",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks11", "aks", "male", 7948971327L, "aks10@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush11",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks12", "aks", "male", 8948971327L, "aks11@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush12",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks13", "aks", "male", 9948971327L, "aks12@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush13",  "password")));
		logger.info(""+motivatorRepository.save(new Motivator("aks14", "aks", "male", 9148971327L, "aks13@mail.com", "address", "renukoot", "Uttar Pradesh", "India", 231221, 179f, 64f, 22f, "access weight", "none", "none", "Vegan", "", "aayush03", "aayush14",  "password")));
	
		logger.info(""+dailyLogsRepository.save(new DailyLogs("aks4", "2019-10-02", "breakfast", "lunch", "dinner", "fruits", "vegetables", "workouts")));
		logger.info(""+dailyLogsRepository.save(new DailyLogs("aks5", "2019-10-02", "breakfast", "lunch", "dinner", "fruits", "vegetables", "workouts")));
		logger.info(""+dailyLogsRepository.save(new DailyLogs("aks6", "2019-10-03", "breakfast", "lunch", "dinner", "fruits", "vegetables", "workouts")));
		logger.info(""+dailyLogsRepository.save(new DailyLogs("aks7", "2019-10-03", "breakfast", "lunch", "dinner", "fruits", "vegetables", "workouts")));
		
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks4", 71f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks5", 72f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks6", 73f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks7", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks8", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks9", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-1")));
		
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks4", 71f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks5", 72f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks6", 73f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks7", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks8", 70f, 179f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks9", 70f, 179f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-2")));
		
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks4", 71f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks5", 72f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks6", 73f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks7", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks8", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		logger.info(""+monthlyChartRepository.save(new MonthlyChart("aks9", 70f, 1.79f, 38f, 32f, 40f, 16f, 10f, 15f, 24f, "month-3")));
		
		logger.info(""+messagesRepository.save(new Messages("aks", "aks6", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks", "aks7", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks", "aks8", "Work Done")));
		
		logger.info(""+messagesRepository.save(new Messages("aks5", "aks8", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks5", "aks8", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks5", "aks8", "Work Done")));
		
		logger.info(""+messagesRepository.save(new Messages("aks1", "aks8", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks1", "aks8", "Work Done")));
		logger.info(""+messagesRepository.save(new Messages("aks1", "aks8", "Work Done")));
	}

}
