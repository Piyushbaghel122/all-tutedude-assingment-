import re
import sys


with open('students_details') as fh:
     data = fh.read()
pattern = r"[a-zA-Z]+[a-zA-Z0-9_.-]+[@][a-z]+[.][a-z]+"
match_obj = re.finditer(pattern, data)

for matches in match_obj:
    print(matches)

