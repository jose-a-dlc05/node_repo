# Switch branches to see

### From the file system module, understand and utilize:

- createReadStream()
- createWriteStream()

## Define what a buffer is

- A buffer is a piece or part of a computer's memory that is put aside as a placeholder for data being sent or received from a file in this case as it can also pertain to data being sent back and forth from
  I/O devices or hard drives.

### Defend why it is better to read data in chunks

You can immediately start modifying that chunk without waiting for the next chunk of data to load.

### Discuss why it is better to read data in streams

- Streams do not read the full file at once. It does not use a full buffer like readFile() would.
