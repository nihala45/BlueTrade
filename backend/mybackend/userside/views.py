from django.http import JsonResponse
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import json
from .models import UserLogin
def userSignup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))

            name = data.get('name', '')
            email = data.get('email', '')
            phone = data.get('phone', '')
            password = data.get('password', '')
            

            # Print to debug
            print(name, email, phone, password, "Debug: Received data")

            

            if UserLogin.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email is already in use'}, status=400)

            try:
                user = UserLogin(
                    name=name,   # You might want to use a different field for username or create a custom user model
                    email=email,
                    phone = phone,
                    password = password
                )
                user.set_password(password)
            except:
                print('this is an error message')
            else:
                user.save()
            print(user,'sosoooonfhnsiohf')
            # Print for confirmation
            print(f"User {name} created successfully")

            return JsonResponse({'message': 'Signup successful'}, status=201)
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except ValidationError as e:
            return JsonResponse({'error': str(e)}, status=400)
        except Exception as e:
            return JsonResponse({'error': 'An unexpected error occurred'}, status=500)

    # Handle non-POST requests
    return JsonResponse({'error': 'Invalid request method'}, status=405)
