# Import the necessary libraries
from twilio.rest import Client

# Define your Twilio account SID and auth token
account_sid = 'your_account_sid'
auth_token = 'your_auth_token'

# Create a Twilio client object
client = Client(account_sid, auth_token)

# Define the geographic area where you want to send messages
location = 'Jalandhar'

# Define a list of phone numbers to send messages to
phone_numbers = ['+1234567890', '+0987654321', '+1111111111']

# Loop through the phone numbers and send a message to each one
for number in phone_numbers:
    message = client.messages.create(
        to=number,
        from_='your_twilio_phone_number',
        body='Hello from here is message body  {}!'.format(location))
