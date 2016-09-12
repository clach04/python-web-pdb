# coding: utf-8
# Created on: 
# Author: Roman Miroshnychenko aka Roman V.M. (romanvm@yandex.ua)

try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

setup(
    name='web-pdb',
    version='0.0.1',
    packages=['web_pdb'],
    url='https://github.com/romanvm/python-web-pdb',
    license='MIT',
    author='Roman Miroshnychenko',
    author_email='romanvm@yandex.ua',
    description='Web interface for Python\'s built-in PDB debugger',
    install_requires=['bottle']
)