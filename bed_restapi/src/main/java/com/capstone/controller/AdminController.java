package com.capstone.controller;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.YearMonth;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.model.Admin;
import com.capstone.model.Challenger;
import com.capstone.model.DailyLogs;
import com.capstone.model.Email;
import com.capstone.model.FinalData;
import com.capstone.model.Messages;
import com.capstone.model.MonthlyChart;
import com.capstone.model.Motivator;
import com.capstone.model.Response;
import com.capstone.model.TemporaryUser;
import com.capstone.model.User;
import com.capstone.repository.ChallengerRepository;
import com.capstone.repository.DailyLogsRepository;
import com.capstone.repository.MessagesRepository;
import com.capstone.repository.MonthlyChartRepository;
import com.capstone.repository.MotivatorRepository;
import com.capstone.repository.TempUserRepository;
import com.capstone.repository.adminRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private adminRepository adminrepository;
	
	@Autowired
	private MotivatorRepository motivatorRepository;
	
	@Autowired
	private ChallengerRepository challengerRepository;
	
	@Autowired
	private TempUserRepository tempUserRepository;
	
	@Autowired
	private DailyLogsRepository dailyLogsRepository;
	
	@Autowired
	private MonthlyChartRepository monthlyChartRepository;
	
	@Autowired
	private MessagesRepository messagesRepository;
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	
	User user = new User();
	Response response = new Response();
	
	Admin admin;
	Motivator motivator;
	Challenger challenger;
	TemporaryUser temporaryUser;
	Messages messages;
	Float monthlyChart;
	FinalData finalData;
	float sum = 0;
	int count = 0;
	
	void sendEmail(String sendTo, String subject, String message) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(sendTo);

        msg.setSubject(subject);
        msg.setText(message);

        javaMailSender.send(msg);

    }
	
	Challenger setChallenger(TemporaryUser tempUser){
		challenger = new Challenger();
		challenger.setAddress(tempUser.getAddress());
		challenger.setBmi(tempUser.getBmi());
		challenger.setCity(tempUser.getCity());
		challenger.setCountry(tempUser.getCountry());
		challenger.setDietCustom(tempUser.getDietCustom());
		challenger.setDietRestrictions(tempUser.getDietRestrictions());
		challenger.setEmail(tempUser.getEmail());
		challenger.setGender(tempUser.getGender());
		challenger.setHeight(tempUser.getHeight());
		challenger.setMedicalCondition(tempUser.getMedicalCondition());
		challenger.setMobileNumber(tempUser.getMobileNumber());
		challenger.setName(tempUser.getName());
		challenger.setPassword(tempUser.getPassword());
		challenger.setPincode(tempUser.getPincode());
		challenger.setPregnantStatus(tempUser.getPregnantStatus());
		challenger.setReason(tempUser.getReason());
		challenger.setReferredByCode(tempUser.getReferredByCode());
		challenger.setRefferalCode(tempUser.getRefferalCode());
		challenger.setState(tempUser.getState());
		challenger.setUserId(tempUser.getUserId());
		challenger.setWeight(tempUser.getWeight());
		challenger.setBatch("none");
		challenger.setGroup("none");
		return challenger;
	}
	
	
	@RequestMapping(value = "/login/do", method = RequestMethod.POST)
    public User login(@RequestBody Admin detail) {
        admin =  adminrepository.findByUserId(detail.getUserId());
        if(admin != null) {
        	user.setUserType("admin");
        	user.setUsername(admin.getUserId());
        	user.setPassword(admin.getPassword());
        	return user;
        }
        motivator = motivatorRepository.findByUserId(detail.getUserId());
        if(motivator != null) {
        	user.setUserType("motivator");
        	user.setUsername(motivator.getUserId());
        	user.setPassword(motivator.getPassword());
        	return user;
        }
        challenger = challengerRepository.findByUserId(detail.getUserId());
        if(challenger != null) {
        	user.setUserType("challenger");
        	user.setUsername(challenger.getUserId());
        	user.setPassword(challenger.getPassword());
        	user.setBatch(challenger.getBatch());
        	return user;
        }
        return user;
    }
	
	@RequestMapping(value = "/register/do", method = RequestMethod.POST)
	public Response register(@RequestBody TemporaryUser user) {
		admin = adminrepository.findByReferral(user.getReferredByCode());
		if(admin == null) {
			motivator = motivatorRepository.findByReferralCode(user.getReferredByCode());
			if(motivator == null) {
				challenger = challengerRepository.findByReferralCode(user.getReferredByCode());
				if(challenger == null) {
					response.setResponse("Incorrect Referral Code");
					return response;
				}
			}
		}
		
		admin = adminrepository.findByEmail(user.getEmail());
		if(admin != null) {
			response.setResponse("Email Address is already registered");
			return response;
		}
		motivator = motivatorRepository.findByEmail(user.getEmail());
		if(motivator != null) {
			response.setResponse("Email Address is already registered");
			return response;
		}
		challenger = challengerRepository.findByEmail(user.getEmail());
		if(challenger != null) {
			response.setResponse("Email Address is already registered");
			return response;
		}
		
		motivator = motivatorRepository.findByMobileNumber(user.getMobileNumber());
		if(motivator != null) {
			response.setResponse("Mobile Number is already registered");
			return response;
		}
		challenger = challengerRepository.findByMobileNumber(user.getMobileNumber());
		if(challenger != null) {
			response.setResponse("Mobile Number is already registered");
			return response;
		}
		
		temporaryUser = tempUserRepository.findByEmail(user.getEmail());
		if(temporaryUser != null) {
			response.setResponse("User Request Already Pending");
			return response;
		}
		temporaryUser = tempUserRepository.findByMobileNumber(user.getMobileNumber());
		if(temporaryUser != null) {
			response.setResponse("User Request Already Pending");
			return response;
		}
		
		user.setHeight(user.getHeight()/100f);
		user.setBmi(user.getWeight()/(user.getHeight()*user.getHeight()));
		String name[] = user.getName().split(" ", 2);
		user.setUserId(name[0]+user.getMobileNumber());
		String email[] = user.getEmail().split("@", 2);
		user.setPassword(email[0].toUpperCase()+"901"+name[0]);
		long divide_mobileNumber1 = user.getMobileNumber()%100000;
		long divide_mobileNumber2 = user.getMobileNumber()/100000;
		user.setRefferalCode(divide_mobileNumber1+name[0]+divide_mobileNumber2);
		
		tempUserRepository.save(user);
		response.setResponse("success");
		return response;	
	}
	
	@GetMapping("/getCountRequests")
	public Response getCount(){
		response.setResponse(""+tempUserRepository.getCount());
		return response;
		
	}
	
	@GetMapping("/getRequests")
	public List<TemporaryUser> getRequests() {
		return (List<TemporaryUser>) tempUserRepository.findAll();
	}
	
	@RequestMapping(value= "/approve", method = RequestMethod.POST)
	public Response approve(@RequestBody Email email) {
		temporaryUser = tempUserRepository.findByEmail(email.getSendTo());
		email.setMessage(email.getMessage()+"\nUsername: "+temporaryUser.getUserId()+"\n"
				+"Referral Code: "+temporaryUser.getReferredByCode()+"\n"
				+"Password: "+temporaryUser.getPassword());
		sendEmail(email.getSendTo(), email.getSubject(), email.getMessage());
		challenger = setChallenger(temporaryUser);
		challengerRepository.save(challenger);
		tempUserRepository.delete(temporaryUser);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/decline", method = RequestMethod.POST)
	public Response decline(@RequestBody Email email) {
		sendEmail(email.getSendTo(), email.getSubject(), email.getMessage());
		temporaryUser = tempUserRepository.findByEmail(email.getSendTo());
		tempUserRepository.delete(temporaryUser);
		response.setResponse("success");
		return response;
	}
	
	@GetMapping("/getNonAssignedUser")
	public List<Challenger> getUsers() {
		return (List<Challenger>) challengerRepository.findAll();
	}
	
	@RequestMapping(value= "/changeBatchorGroup", method = RequestMethod.POST)
	public Response changeBatchorGroup(@RequestBody Challenger user) {
		challengerRepository.save(user);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/deleteChallenger", method = RequestMethod.POST)
	public Response deleteChallenger(@RequestBody Challenger user) {
		challengerRepository.delete(user);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/getdetails", method = RequestMethod.POST)
	public Challenger getdetails(@RequestBody String user) {
		return challengerRepository.findByUserId(user);
	}
	
	@RequestMapping(value= "/modifyChallenger", method = RequestMethod.POST)
	public Response modifyChallenger(@RequestBody Challenger user) {
		challengerRepository.save(user);
		response.setResponse("success");
		return response;
	}
	
	@GetMapping("/getMotivatorDetails")
	public List<Motivator> getMotivatorDetails() {
		return (List<Motivator>) motivatorRepository.findAll();
	}
	
	@RequestMapping(value= "/deleteMotivator", method = RequestMethod.POST)
	public Response deleteMotivator(@RequestBody Motivator user) {
		motivatorRepository.delete(user);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/getdetailsMotivator", method = RequestMethod.POST)
	public Motivator getdetailsMotivator(@RequestBody String user) {
		return motivatorRepository.findByUserId(user);
	}
	
	@RequestMapping(value= "/modifyMotivator", method = RequestMethod.POST)
	public Response modifyMotivator(@RequestBody Motivator user) {
		motivatorRepository.save(user);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/changeBatch", method = RequestMethod.POST)
	public Response changeBatch(@RequestBody Motivator user) {
		motivator = motivatorRepository.findByUserId(user.getUserId());
		long count = motivatorRepository.getCount(motivator.getBatch());
		if(count == 1L) {
			response.setResponse("Can't change, minimum motivator allowed is 1");
			return response;
		}
		if(user.getBatch().equals("none")) {
			motivatorRepository.save(user);
			response.setResponse("success");
			return response;
		}
		count = motivatorRepository.getCount(user.getBatch());
		if(count == 5L) {
			response.setResponse("Can't change, maximum motivator allowed is 5");
			return response;
		}
		motivatorRepository.save(user);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/changeChallenger", method = RequestMethod.POST)
	public Response changeChallenger(@RequestBody Motivator user) {
		motivatorRepository.save(user);
		challengerRepository.deleteById(user.getUserId());
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value= "/changeMotivator", method = RequestMethod.POST)
	public Response changeMotivator(@RequestBody Challenger user) {
		challengerRepository.save(user);
		motivatorRepository.deleteById(user.getUserId());
		response.setResponse("success");
		return response;
	}
	
	@PostMapping("/upload")
	public Response uploadToLocalFileSystem(@RequestParam("file") MultipartFile file, @RequestParam("batch") String batch) {
		String fileName = batch+".pdf";
		Path path = Paths.get(fileName);
		try {
			Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			e.printStackTrace();
			response.setResponse("failure");
			return response;
		}
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("")
				.path(fileName)
				.toUriString();
		logger.info(""+fileDownloadUri);
		response.setResponse("success");
		return response;
	}

	@GetMapping(value = "/download/{userId}")
	public ResponseEntity downloadFileFromLocal(@PathVariable("userId") String userId) {
		challenger = challengerRepository.findByUserId(userId);
		Resource resource = null;
		if(challenger == null) {
			return ResponseEntity.ok("Access Denied");
		}
		String filename = challenger.getBatch();
		Path path = Paths.get(filename+".pdf");
		try {
			resource = new UrlResource(path.toUri());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType("application/pdf"))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}
	
	@RequestMapping(value= "/dailyLogs", method = RequestMethod.POST)
	public List<DailyLogs> dailyLogs(@RequestBody DailyLogs log) {
		return dailyLogsRepository.findByDate(log.getDate());
	}
	
	@RequestMapping(value= "/monthlyCharts", method = RequestMethod.POST)
	public List<MonthlyChart> monthlyCharts(@RequestBody MonthlyChart chart) {
		return monthlyChartRepository.findByMonth(chart.getMonth());
	}
	
	@RequestMapping(value= "/getAdminMessages", method = RequestMethod.POST)
	public List<Messages> getAdminMessages(@RequestBody Messages message){
		return messagesRepository.findByUserId(message.getUserId());
	}
	
	@RequestMapping(value="/deleteAdminMessage", method = RequestMethod.POST)
	public Response deleteAdminMessage(@RequestBody Messages message) {
		messagesRepository.delete(message);
		response.setResponse("success");
		return response;
	}
	
	@RequestMapping(value="/sendMessageMotivator", method = RequestMethod.POST)
	public Response sendMessageMotivator(@RequestBody Messages message) {
		List<Motivator> motivatorList = motivatorRepository.findAll();
		if(motivatorList.size() == 0) {
			response.setResponse("Motivators Not Found");
			return response;
		}
		motivatorList.forEach(motiv ->{
			messages = new Messages();
			messages.setMessage(message.getMessage());
			messages.setUserId(motiv.getUserId());
			messages.setSender(message.getSender());
			messagesRepository.save(messages);
		});
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/sendMessageChallenger", method = RequestMethod.POST)
	public Response sendMessageChallenger(@RequestBody Messages message) {
		List<Challenger> challengerList = challengerRepository.findAll();
		if(challengerList.size() == 0) {
			response.setResponse("Challengers Not Found");
			return response;
		}
		challengerList.forEach(chall ->{
			messages = new Messages();
			messages.setMessage(message.getMessage());
			messages.setUserId(chall.getUserId());
			messages.setSender(message.getSender());

			messagesRepository.save(messages);
		});
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/sendMessageIndividual", method = RequestMethod.POST)
	public Response sendMessageIndividual(@RequestBody Messages message) {
		challenger = challengerRepository.findByUserId(message.getUserId());
		if(challenger == null) {
			motivator = motivatorRepository.findByUserId(message.getUserId());
			if(motivator == null) {
				response.setResponse("Username not found.");
				return response;
			}
		}
		messagesRepository.save(message);
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/getAboveReport", method = RequestMethod.POST)
	public FinalData getAboveReport() {
		finalData = new FinalData();
		finalData.setCountAbove(challengerRepository.countAbove("AboveBMI25"));
		finalData.setCountBelow(challengerRepository.countAbove("BelowBMI25"));
		List<Challenger> challengerList = challengerRepository.findByBatch("AboveBMI25");
		try {
			finalData.setInitialAverage(challengerRepository.getBMI("AboveBMI25"));
		}catch(Exception e){
			e.printStackTrace();
			finalData.setInitialAverage(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-1",chall.getUserId());
				if(monthlyChart != null) {
					sum += monthlyChart;
					count++;
				}
			});
			finalData.setMonth1Average(sum/count);
			
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth1Average(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-2",chall.getUserId());
				if(monthlyChart!=null) {
					sum+=monthlyChart;
					count++;
				}
			});
			finalData.setMonth2Average(sum/count);
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth2Average(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-3",chall.getUserId());
				if(monthlyChart != null) {
					sum+=monthlyChart;
					count++;
				}
			});
			finalData.setMonth3Average(sum/count);
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth3Average(0);
		}
		return finalData;
	}
	
	@RequestMapping(value="/getBelowReport", method = RequestMethod.POST)
	public FinalData getBelowReport() {
		finalData = new FinalData();
		finalData.setMaleCount(challengerRepository.countGender("male"));
		finalData.setFemaleCount(challengerRepository.countGender("female"));
		List<Challenger> challengerList = challengerRepository.findByBatch("BelowBMI25");
		try {
			finalData.setInitialAverage(challengerRepository.getBMI("BelowBMI25"));
		}catch(Exception e){
			e.printStackTrace();
			finalData.setInitialAverage(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-1",chall.getUserId());
				if(monthlyChart!= null) {
					sum += monthlyChart;
					count++;
				}
				
			});
			finalData.setMonth1Average(sum/count);
			
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth1Average(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-2",chall.getUserId());
				logger.info(""+chall.getUserId());
				if(monthlyChart!= null) {
					sum += monthlyChart;
					count++;
				}
			});
			finalData.setMonth2Average(sum/count);
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth2Average(0);
		}
		try {
			sum = 0;
			count = 0;
			challengerList.forEach(chall ->{
				monthlyChart = monthlyChartRepository.getBMI("month-3",chall.getUserId());
				if(monthlyChart!= null) {
					sum += monthlyChart;
					count++;
				}
			});
			finalData.setMonth3Average(sum/count);
		}catch(Exception e){
			e.printStackTrace();
			finalData.setMonth3Average(0);
		}
		return finalData;
	}
	
	@RequestMapping(value="/sendMessageGroup", method = RequestMethod.POST)
	public Response sendMessageGroup(@RequestBody Messages message) {
		List<String> challengerList = challengerRepository.getGroupUsers(message.getUserId());
		if(challengerList.size() == 0) {
			response.setResponse("No one in Group.");
			return response;
		}
		challengerList.forEach(userId ->{
			messages = new Messages();
			messages.setMessage(message.getMessage());
			messages.setUserId(userId);
			messages.setSender(message.getSender());
			messagesRepository.save(messages);
		});
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/sendMessageBatch", method = RequestMethod.POST)
	public Response sendMessageBatch(@RequestBody Messages message) {
		List<String> challengerList = challengerRepository.getBatchUsers(message.getUserId());
		if(challengerList.size() == 0) {
			response.setResponse("No one in Batch.");
			return response;
		}
		challengerList.forEach(userId ->{
			messages = new Messages();
			messages.setMessage(message.getMessage());
			messages.setUserId(userId);
			messages.setSender(message.getSender());
			messagesRepository.save(messages);
		});
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/sendMessageAdmin", method = RequestMethod.POST)
	public Response sendMessageAdmin(@RequestBody Messages message) {
		List<Admin> adminList = adminrepository.findAll();
		adminList.forEach(admin ->{
			messages = new Messages();
			messages.setMessage(message.getMessage());
			messages.setUserId(admin.getUserId());
			messages.setSender(message.getSender());
			messagesRepository.save(messages);
		});
		response.setResponse("Message Sent.");
		return response;
	}
	
	@RequestMapping(value="/changePassword", method = RequestMethod.POST)
	public Response changePassword(@RequestBody User newPassword) {
		if(newPassword.getUserType().equals("Motivator")) {
			motivator = motivatorRepository.findByUserId(newPassword.getUsername());
			if(!newPassword.getOldpassword().equals(motivator.getPassword())) {
				response.setResponse("Old Password is Wrong");
				return response;
			}
			motivator.setPassword(newPassword.getPassword());
			motivatorRepository.save(motivator);
		}
		else {
			challenger = challengerRepository.findByUserId(newPassword.getUsername());
			if(!newPassword.getOldpassword().equals(challenger.getPassword())) {
				response.setResponse("Old Password is Wrong");
				return response;
			}
			challenger.setPassword(newPassword.getPassword());
			challengerRepository.save(challenger);
		}
		response.setResponse("Password has been changed.");
		return response;
	}
	
	@RequestMapping(value="/saveDailyLog", method = RequestMethod.POST)
	public Response saveDailyLog(@RequestBody DailyLogs dailylog) {
		long count = dailyLogsRepository.dailyCount(dailylog.getDate(), dailylog.getUserId());
		if(count > 0) {
			response.setResponse("Daily Log already exist for present date.");
			return response;
		}
		dailyLogsRepository.save(dailylog);
		response.setResponse("Data Saved Successfully.");
		return response;
	}
	
	@RequestMapping(value="/saveMonthlyLog", method = RequestMethod.POST)
	public Response saveMonthlyLog(@RequestBody MonthlyChart monthlyChart) {
		String dateSplit[] = monthlyChart.getDate().split("-");
		String date = ""+dateSplit[0]+"-"+dateSplit[1];
		long count = monthlyChartRepository.monthlyCount(date, monthlyChart.getUserId());
		if(count > 0) {
			response.setResponse("Monthly Log already exist for this month.");
			return response;
		}
		List<MonthlyChart> monthlylog = monthlyChartRepository.findByUserId(monthlyChart.getUserId());
		if(monthlylog.size() == 0) {
			monthlyChart.setMonth("month-1");
			monthlyChartRepository.save(monthlyChart);
			response.setResponse("Data Saved Successfully.");
			return response;
		}
		if(monthlylog.size() == 1) {
			monthlyChart.setMonth("month-2");
			monthlyChartRepository.save(monthlyChart);
			response.setResponse("Data Saved Successfully.");
			return response;
		}
		monthlyChart.setMonth("month-3");
		monthlyChartRepository.save(monthlyChart);
		response.setResponse("Data Saved Successfully.");
		return response;
	}
	
}