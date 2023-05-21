// Bibliotecas
#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>

// Definição das vaiáveis e portas
#define data 17

const char* ssid = "Wokwi-GUEST"; //Wokwi-GUEST
const char* pass = ""; //Vazia
const char* url  = "http://192.168.1.58:8000"; //API

HTTPClient http;

int Vi = 64;
int Vf = 8062;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  pinMode(data, INPUT);

  // Connect to wifi
  WiFi.begin(ssid, pass, 6);
  
  // Wait some time to connect to wifi
  if(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("WiFi Connected!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println(url);
  Serial.println("");
}

void Data(int eletricity) {
  Serial.println("Data begin...");

  String payload = "{\"eletricity\":" + String(eletricity) + "}";
  
  http.begin((String)url+"/data"); //HTTP
  http.addHeader("Content-Type", "application/json");

  // start connection and send HTTP header
  int httpCode = http.POST(payload);

  // httpCode will be negative on error
  if(httpCode == 200) {
    Serial.print("API Response code: ");
    Serial.println(httpCode);
    String response = http.getString();
    Serial.println(response);
    }
  
  else {
    Serial.printf("Failed! Error: %s\n", http.errorToString(httpCode).c_str());
  }

  http.end();
}

void loop() {
  int a0 = analogRead(data);
  int c0 = (a0 - Vi)/(Vf/15);
  if(WiFi.status() == WL_CONNECTED) {
    Serial.println(c0);
    Data(c0);
  } else Serial.println("WiFi Desconnected!");

  delay(500);
}
