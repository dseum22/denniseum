def anagrams(inputStr):
    '''anagrams(inputStr) -> list
    returns list of all anagram permutations of inputStr'''

    # base case
    if len(inputStr) == 1:
        return [inputStr]

    # recursive step
    outputList = []  
    for index in range(len(inputStr)):

        restOfList = inputStr[:index] + inputStr[(index + 1):]
        permutationList = anagrams(restOfList)

        for tail in permutationList:    
            outputList.append(inputStr[index] + tail)   # add joined inputList[index] with permutations of inputStr to outputList
    
    return outputList

def duplicate_remover(inputList):
    '''duplicate_remover(inputList) -> list
    returns list inputList without any duplicate elements'''

    outputList = []

    # processes and adds non-duplicate elements from inputList into outputList
    for element in inputList:
        if element not in outputList:
            outputList.append(element)

    return outputList

def jumble_solve(inputStr):
    '''jumble_solve(inputStr) -> list
    returns list of anagrams of inputStr that are words verified by (wordlist.txt)'''

    outputList = []
    anagramList = anagrams(inputStr)

    wordFile = open('wordlist.txt', 'r')    # open file wordlist.txt as word verifying bank

    for element in anagramList:
        
        for line in wordFile:
            word = line[:-1]    # remove the newline term
            if word.upper() == element:
                outputList.append(element)
        
        wordFile.seek(0)    # start read counter back to line 0
    
    wordFile.close()    # close wordlist.txt

    outputList = duplicate_remover(outputList)  # remove duplicates

    return outputList

# test cases
print(jumble_solve('CHWAT'))

print(jumble_solve('RAROM'))

print(jumble_solve('CEPLIN'))

print(jumble_solve('YAFLIM'))

print(jumble_solve('POTS'))