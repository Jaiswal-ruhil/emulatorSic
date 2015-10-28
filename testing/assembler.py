#!/usr/bin/env python2
import os,sys,inspect
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
testdir = parentdir+"/Assembler"
sys.path.insert(0,testdir) 

from Assembler import Assembler


if __name__ == '__main__':
  test_code = []
  asm_file = open(testdir+"/test.asm","r")
  file_content = asm_file.readlines()                                          #gives an array of strings with \n appended
  asm_assembler = Assembler()
  for line in file_content:
    line = line.strip()
    test_code.append(line)
  asm_file.close()
  print test_code
  Assembler.assemble(test_code)
