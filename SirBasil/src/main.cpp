#include "Arduino.h"
#include "config.h"
#include "AccelStepper.h"

AccelStepper stepper(X_INTERFACE_TYPE, X_STEP_PIN, X_DIR_PIN);

void setup() {
  Serial.begin(9600); // Serial port for debugging
  stepper.setMaxSpeed(X_MAX_SPEED);
  stepper.setSpeed(1500);
}

void loop() {
  while (Serial.available()) {
    Serial.println("Bluetooth available");
  }
}
