#include "Arduino.h"
#include "config.h"

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("initialized");
}
