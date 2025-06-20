# from mftool import Mftool
# import json
# import os

# mf = Mftool()



# q = mf.get_scheme_quote('153568') # it's ok to use both string or integer as codes.
# print(q)



# # Load fund code-name pairs from your flat dictionary JSON
# with open("mf_codes.json", "r") as f:
#     fund_codes = json.load(f)

# output_data = []
# invalid_funds = []

# for code, name in fund_codes.items():
#     try:
#         data = mf.get_scheme_quote(int(code))

#         # Skip if no data returned
#         if data is None:
#             print(f"⚠️ Skipped (No data): {name}")
#             invalid_funds.append({code: name})
#             continue

#         fund_data = {
#             "code": code,
#             "name": name,
#             "logo": f"https://logo.clearbit.com/{name.split()[0].lower()}.com",
#             "launchDate": data.get("scheme_start_date", "Unknown"),
#             "aum": data.get("scheme_aum", "Unknown"),
#             "returns": {
#                 "1Y": data.get("return_1year", "0"),
#                 "3Y": data.get("return_3year", "0"),
#                 "5Y": data.get("return_5year", "0")
#             },
#             "category": "Childrens Fund"  # You can change or detect dynamically
#         }

#         output_data.append(fund_data)
#     except Exception as e:
#         print(f"❌ Error for {name}: {e}")
#         invalid_funds.append({code: name})

# # Save to mutual_funds.json
# output_path = os.path.join("public", "mutual_funds.json")
# with open(output_path, "w") as out_file:
#     json.dump(output_data, out_file, indent=2)
# print(f"✅ mutual_funds.json updated with {len(output_data)} valid funds.")

# # Optional: log skipped/invalid
# invalid_path = os.path.join("invalid_codes.json")
# with open(invalid_path, "w") as out_file:
#     json.dump(invalid_funds, out_file, indent=2)
# print(f"⚠️ Logged {len(invalid_funds)} skipped/invalid funds to invalid_codes.json.")










# from mftool import Mftool
# import json
# import os

# # Initialize Mftool instance
# mf = Mftool()

# # Load fund code-name pairs from uploaded JSON file
# with open("mf_codes.json", "r") as f:
#     fund_codes = json.load(f)

# output_data = []
# invalid_funds = []

# # Create 'public' directory if it doesn't exist
# os.makedirs("public", exist_ok=True)

# # Iterate through each fund and fetch quote data
# for code, name in fund_codes.items():
#     try:
#         data = mf.get_scheme_quote(code)
#         print(code)

#         if not data:
#             print(f"⚠️ Skipped (No data): {name}")
#             invalid_funds.append({code: name})
#             continue

#         fund_data = {
#             "code": code,
#             "name": name,
#             "logo": f"https://logo.clearbit.com/{name.split()[0].lower()}.com",
#             "launchDate": data.get("scheme_start_date", "Unknown"),
#             "aum": data.get("scheme_aum", "Unknown"),
#             "returns": {
#                 "1Y": data.get("return_1year", "0"),
#                 "3Y": data.get("return_3year", "0"),
#                 "5Y": data.get("return_5year", "0")
#             },
#             "category": "Children's Fund"  # Default category; adjust as needed
#         }

#         output_data.append(fund_data)

#     except Exception as e:
#         print(f"❌ Error fetching data for {name}: {e}")
#         invalid_funds.append({code: name})

# # Save the valid data to mutual_funds.json
# with open("public/mutual_funds.json", "w") as out_file:
#     json.dump(output_data, out_file, indent=2)

# print(f"✅ mutual_funds.json updated with {len(output_data)} valid funds.")

# # Save the list of invalid or skipped funds
# with open("invalid_codes.json", "w") as invalid_file:
#     json.dump(invalid_funds, invalid_file, indent=2)

# print(f"⚠️ Logged {len(invalid_funds)} skipped/invalid funds to invalid_codes.json.")







from mftool import Mftool
import json
import os

# Initialize mftool instance
mf = Mftool()

# Load the array of scheme objects from JSON
with open("new_mf_codes.json", "r") as f:
    fund_list = json.load(f)

output_data = []
invalid_funds = []

# Ensure public folder exists
os.makedirs("public", exist_ok=True)

# Iterate over each scheme in the list
for fund in fund_list:
    code = fund.get("schemeCode")
    name = fund.get("schemeName")

    try:
        data = mf.get_scheme_quote(int(code))  # Ensure code is passed as int
         
        print(data)

        # if not data:
        #     print(f"⚠️ Skipped (No data): {name}")
        #     invalid_funds.append({code: name})
        #     continue

        fund_data = {
            "code": str(code),
            "name": name,
            "logo": f"https://logo.clearbit.com/{name.split()[0].lower()}.com",
            "launchDate": data.get("scheme_start_date", "Unknown"),
            "aum": data.get("scheme_aum", "Unknown"),
            "returns": {
                "1Y": data.get("return_1year", "0"),
                "3Y": data.get("return_3year", "0"),
                "5Y": data.get("return_5year", "0")
            },
            "category": "Top Performing"
        }

        print(fund_data)

        output_data.append(fund_data)

    except Exception as e:
        print(f"❌ Error fetching data for {name}: {e}")
        invalid_funds.append({code: name})

# Write output to mutual_funds.json
with open("public/mutual_funds.json", "w") as f:
    json.dump(output_data, f, indent=2)

print(f"\n✅ mutual_funds.json updated with {len(output_data)} valid funds.")

# Log skipped funds
with open("invalid_codes.json", "w") as f:
    json.dump(invalid_funds, f, indent=2)

print(f"⚠️ Logged {len(invalid_funds)} skipped/invalid funds to invalid_codes.json.")
