from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
CORS(app)

# Your dataset
data = {
    "Task Name": [
        "Writing", "Reading", "Exercise", "Meditation", "Email", "Meeting", "Coding", "Design", "Cooking", "Cleaning",
        "Studying", "Research", "Walking", "Brainstorming", "Yoga", "Project Work", "Revision", "Presentation",
        "Drawing", "Journaling", "Workout", "Debugging", "Browsing", "Data Entry", "Planning", "Documentation",
        "Testing", "Learning", "Organizing", "Gaming", "Social Media", "Sleeping", "Shopping", "Relaxing", "Call",
        "Chatting", "Interview", "Group Study", "Note Taking", "Support Ticket", "Budgeting", "Content Writing",
        "Storyboarding", "Driving", "Exercise", "Reading", "Meditation", "Work Call", "Client Mail", "Break"
    ],
    "Category": [
        "Work", "Study", "Wellness", "Wellness", "Work", "Work", "Work", "Work", "Personal", "Personal",
        "Study", "Study", "Wellness", "Work", "Wellness", "Work", "Study", "Work",
        "Personal", "Personal", "Wellness", "Work", "Personal", "Work", "Work", "Work",
        "Work", "Study", "Personal", "Personal", "Personal", "Wellness", "Personal", "Wellness", "Work",
        "Personal", "Work", "Study", "Study", "Work", "Work", "Work",
        "Work", "Personal", "Wellness", "Study", "Wellness", "Work", "Work", "Personal"
    ],
    "Time Spent (hrs)": np.random.uniform(0.5, 4.0, 50).round(2),
    "Efficiency Score": np.random.randint(50, 100, 50)
}

df = pd.DataFrame(data)
# Step 2: Encode Task and Category
task_encoder = LabelEncoder()
cat_encoder = LabelEncoder()

df["Task Encoded"] = task_encoder.fit_transform(df["Task Name"])
df["Category Encoded"] = cat_encoder.fit_transform(df["Category"])

# Step 3: Train the model
X = df[["Task Encoded", "Category Encoded", "Time Spent (hrs)"]]
y = df["Efficiency Score"]

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X, y)

# Step 4: Predict function
def predict_efficiency(task, category, time_spent):
    # Encode task
    if task in task_encoder.classes_:
        task_encoded = task_encoder.transform([task])[0]
    else:
        task_encoder.classes_ = np.append(task_encoder.classes_, task)
        task_encoded = task_encoder.transform([task])[0]

    # Encode category
    if category in cat_encoder.classes_:
        category_encoded = cat_encoder.transform([category])[0]
    else:
        cat_encoder.classes_ = np.append(cat_encoder.classes_, category)
        category_encoded = cat_encoder.transform([category])[0]

    # Predict using DataFrame to match training format
    input_data = pd.DataFrame([{
        "Task Encoded": task_encoded,
        "Category Encoded": category_encoded,
        "Time Spent (hrs)": time_spent
    }])

    predicted_efficiency = model.predict(input_data)[0]

    # Suggestions
    if predicted_efficiency > 85:
        suggestion = "✅ Excellent! Keep up the great work!"
    elif predicted_efficiency > 70:
        suggestion = "🕒 Good, but consider optimizing time or using focus techniques."
    else:
        suggestion = "⚠️ Try breaking task into chunks or reducing distractions."

    return predicted_efficiency, suggestion, task_encoded, category_encoded

# Step 5: User input
task_input = input("🔧 Enter the task you're doing: ")
category_input = input("📂 Enter the category (e.g., Work, Study, Wellness): ")
time_spent_input = float(input("⏰ Enter time spent (in hours): "))

efficiency, tip, t_enc, c_enc = predict_efficiency(task_input, category_input, time_spent_input)

# Step 6: Show result
print(f"\n🔍 Predicted Efficiency: {efficiency:.2f}%")
print(f"💡 Suggestion: {tip}")

# Step 7: Add new input to dataset using pd.concat instead of .append
new_row_df = pd.DataFrame([{
    "Task Name": task_input,
    "Category": category_input,
    "Time Spent (hrs)": time_spent_input,
    "Efficiency Score": round(efficiency),
    "Task Encoded": t_enc,
    "Category Encoded": c_enc
}])

df = pd.concat([df, new_row_df], ignore_index=True)

# Optional: Export updated dataset (if needed)
# df.to_csv("updated_task_data.csv", index=False)

#print("\n✅ New entry added to the dataset!")



