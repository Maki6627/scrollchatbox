let logInstances = []
	logInstances.push(document.getElementById('log'))
	logInstances.push(...Array.from(document.getElementsByClassName('log_copy')))
	

	// Please use event listeners to run functions.
	document.addEventListener('onLoad', function (obj) {
	  // obj will be empty for chat widget
	  // this will fire only once when the widget loads
	  for (let i = 0; i < logInstances.length; i++) {
	    logInstances[i].dataset.row = i
	    if (i === 0) { continue }
	      
	    logInstances[i].style.right = i * -100 + '%'
	    logInstances[i].style.marginBottom = i * 1.6 + 'em'
	  }
	});
	

	document.addEventListener('onEventReceived', function (obj) {
	  // obj will contain information about the event
	  for (let i = 0; i < logInstances.length; i++) {
	    keepRecentMessages(logInstances[i])
	  }
	});
	

	// function keepRecentMessages (messageList, amountToKeep = 10) {
	//   if (
	//     typeof messageList === 'undefined' ||
	//     typeof amountToKeep !== 'number'
	//   ) {
	//     return false
	//   }
	//   while (messageList.children.length > amountToKeep) {
	//     messageList.removeChild(messageList.firstElementChild)
	//   }
	//   return true
	// }