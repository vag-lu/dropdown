# Start App

```
npm install

npm start

```

# DropDown API

### iconStyle
Changes width, hight and color of the more icon.

```
 iconStyle={{width: "32", height: "32", color: "#FFFFFF"}}
```

### position
Define if the dropdown will be in the left or right. By default it is set to the left. 
Give the value "left" to set left or "right" to set right.

### Item
Use this component as a child of <DropDown/> to define each item of the dropdown.

```
<DropDown iconStyle={{width: "32", height: "32"}} position="right">
     <Item>Rename</Item>
     <Item>Delete</Item>
     <Item>Share</Item>
     <Item><button>Click here!</button></Item>
</DropDown>
```
