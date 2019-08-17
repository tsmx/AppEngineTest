This is a (very simple) test project to demonstrate and test the Google-Cloud AppEngine with NodeJS.

Setting up Beanstalk at AWS:
- in the app main folder:
- create the AppEngine deployment decsriptor 'app.yaml'
- gcloud auth login (if not already done)
- cloud config set project [PROJECT-ID]
- gcloud app deploy
- browse [PROJECT-ID].appspot.com

Useful commands / hints:
- creating an IAM user including key file to authenticate for other GCP services such as sotrage buckets (here role = owner for full access!, set to more restrictive role):
--> gcloud iam service-accounts create [USER-NAME]
--> gcloud projects add-iam-policy-binding [PROJECT-ID] --member "serviceAccount:[USER-NAME]@[PROJECT-ID].iam.gserviceaccount.com" --role "roles/owner"
--> gcloud iam service-accounts keys create [KEY-FILE].json --iam-account [USER-NAME]@[PROJECT-ID].iam.gserviceaccount.com
--> export full path to [KEY-FILE].json as environment variable GOOGLE_APPLICATION_CREDENTIALS
--> e.g. in VSCode add to launch.json: "env": { "GOOGLE_APPLICATION_CREDENTIALS": "[full-path-to][KEY-FILE].json"}