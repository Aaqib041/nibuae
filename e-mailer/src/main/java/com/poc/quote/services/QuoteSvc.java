package com.poc.quote.services;

import static com.poc.quote.constants.Constants.ATTACHMENT;
import static com.poc.quote.constants.Constants.ATTACHMENT_NAME;
import static com.poc.quote.constants.Constants.ATTACHMENT_TYPE;
import static com.poc.quote.constants.Constants.FROM;
import static com.poc.quote.constants.Constants.SUBJECT;
import static com.poc.quote.constants.Constants.TO;

import com.itextpdf.text.DocumentException;
import com.poc.quote.enums.FileType;

import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class QuoteSvc {


  @Autowired
  private FileGenerator fileGenerator;

  @Autowired
  private Mailer mailer;

  @Autowired
  private Environment environment;

  public void sendFile(FileType fileType, Map<String, String> quoteInfo)
      throws DocumentException, MessagingException {
    System.out.println(fileType + " " + quoteInfo);
    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    fileGenerator.writeToOutputStream(outputStream, quoteInfo);
    Map<String, Object> mailData = new HashMap<>();
    mailData.put(TO, environment.getProperty("to"));
    mailData.put(FROM, environment.getProperty("from"));
    mailData.put(ATTACHMENT, outputStream.toByteArray());
    mailData.put(ATTACHMENT_TYPE, "application/pdf");
    mailData.put(ATTACHMENT_NAME, "quote_info.pdf");
    mailData.put(SUBJECT, "QUOTE REQUIRED");
    mailer.sendMultipart(mailData);
  }
}
