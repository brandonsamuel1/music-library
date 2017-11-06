
var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    },

          },
  printPlaylists: function () {
    for(var key in this.playlists) {
      var playlist = this.playlists[key];
      console.log(key + ": " + playlist.name + " - " + playlist.tracks.length + " tracks ");
    }

  },
  printTracks: function () {
     for (var key in this.tracks) {
      var track = this.tracks[key]
      console.log(key + ": " + track.name + " by " + track.artist + " (" + track.album + ") ");
    }
  },
  printPlaylist: function (playlistId) {
    console.log(playlistId+": "+this.playlists[playlistId].name+" - "+this.playlists[playlistId].tracks.length+" tracks");

    for(var i = 0; i < this.playlists[playlistId].tracks.length; i++){
      var temp = this.playlists[playlistId].tracks[i];
      console.log(this.playlists[playlistId].tracks[i]+": "+this.tracks[temp].name+ " by "+this.tracks[temp].artist+"("+this.tracks[temp].album+")");
    }

  },

    addTrackToPlaylist: function (trackId, playlistId) {

      this.playlists[playlistId].tracks.push(trackId);

      console.log(this.playlists[playlistId])

  },

    uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

    addTrack: function (name, artist, album) {

      this.tracks[id] = {
        id: id,
        name: name,
        artist: artist,
        album: album
      }
  },

    addPlaylist: function (name) {

    var id = uid();
      this.playlists[id] = {
      id: id,
      name: name
    }
  },


