from mftool import Mftool
import json

mf = Mftool()
all_funds = mf.get_scheme_codes()

# Save only top 100 or filtered ones to test
selected = list(all_funds.items())[:100]  # or apply your own filter
with open("new_mf_codes.json", "w") as f:
    json.dump([{k: v} for k, v in selected], f, indent=2)

print("✅ Cleaned mf_codes.json written.")
