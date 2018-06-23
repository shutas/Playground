# Written by Shuta Suzuki (shutas@umich.edu)

import numpy as np

def check_content(myArray):
    """Print Content of myArray."""
    print("The content of myArray is:\n", myArray)


def check_type(myArray):
    """Print Data Type of Members in myArray."""
    print("The type of myArray is:", type(myArray))

def check_array(myArray):
    """Print All of Features of myArray."""
    check_content(myArray)
    check_type(myArray)
    print()

def main():
    # Create an NumPy array of and check its attributes
    print("Example #1:\n")

    myArray = np.arange(15).reshape(3, 5)

    assert myArray.shape == (3, 5)
    assert myArray.ndim == 2
    assert myArray.dtype.name == "int64"
    assert myArray.itemsize == 8
    assert myArray.size == 15

    check_array(myArray)

    # Create an NumPy array using a constructor
    print("Example #2:\n")

    myArray = np.array([(1, 2, 3), (4, 5, 6)])

    check_array(myArray)


# Run Examples
main()