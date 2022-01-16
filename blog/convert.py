# Call using python convert.py
# Python --version = 3.9.4

import time
import os

class gvars:
    IN_FILE = "input.txt"
    OUT_FILE = ""

def parse(contents):
    convert = []

    idx = 0

    #remove extra lines
    while(idx != len(contents)-1):
        if contents[idx] == "\n" and contents[idx+1] == "\n":
            contents.pop(idx)
        else:
            idx+=1
    
    #remove all starting new lines
    while(contents[0] == '\n'):
        contents.pop(0)

    #remove all trailing new lines
    while(contents[-1] == '\n'):
        contents.pop(-1)

    print(contents)
    print("\n\n\n\n")

    #now that it's formatted correctly, parse and convert to html
    length = len(contents)
    state = "None"
    for i in range(0,length):
        if contents[i] == "\n":
            state="1stNL"
        elif contents[i][-1] == '\n':
            convert.append(tagonize("p", contents[i]))
        elif contents[i][0:6] == "images":
            #check valid path

    return convert
        
def tagonize(token, str):
    if token is "p":
        return ("<p>" + str[0:-1] + "</p>")
    else:
        print("ERROR NOT A VALID TOKEN!!")


def printlist(list):
    for each in list:
        print(each)


def main():
    start = time.time()
    print("Convert.py main called.")
    
    file = open(gvars.IN_FILE, "r")
    contents = file.readlines()
    file.close()

    print(contents)
    print("\n\n\n\n")

    converted = parse(contents)

    printlist(converted)


    end = time.time()
    print(f"\nConverted in {end-start}s")








if __name__ == "__main__":
    main()
